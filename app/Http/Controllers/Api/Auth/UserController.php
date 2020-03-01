<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\InterfaceItem as InterfaceItem;
use App\Meta_Object;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
    try {
        $items = DB::table('interface_items')
            ->leftJoin('meta_objects', 'interface_items.meta_object_id', '=', 'meta_objects.id')
            ->leftJoin('meta_types', 'meta_objects.meta_type_id', '=', 'meta_types.id')
            ->select('meta_types.name as type_name', 'meta_types.title as type_title', 'meta_types.ptitle as type_ptitle', 
                'meta_objects.name as object_name', 'meta_objects.title as object_title', 'meta_objects.table_name as object_table')
            ->where('interface_items.interface_id', $request->user()->interface_id)
            ->orderByRaw('type_name desc, object_title asc')
            ->get();
        $interface = [];
        foreach($items as $item){
            if(!array_key_exists($item->type_name, $interface))
                $interface[$item->type_name] = ['title' => $item->type_title, 'ptitle' => $item->type_ptitle, 'content' => []];
            $objects = $interface[$item->type_name]['content'];
            $objects[$item->object_name] = $item->object_title;
            $interface[$item->type_name]['content'] = $objects;
        }

        return response()->json([
            'id' => $request->user()->id,
            'name' => $request->user()->name,
            'rights' => '{empty}',
            'interface' => $interface,
        ], 200);
    }
    catch(Exception $e){
        return response()->json([
            'e' => $e->getMessage(),
        ], 200);
    }
    }
}
