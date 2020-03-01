<?php

use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('products')->delete();
        
        \DB::table('products')->insert(array (
            0 => 
            array (
                'id' => 1,
                'parent_id' => 0,
                'is_group' => 1,
                'title' => 'Оправы',
                'created_at' => '2020-02-09 19:37:44',
                'updated_at' => '2020-02-09 19:37:46',
            ),
            1 => 
            array (
                'id' => 2,
                'parent_id' => 0,
                'is_group' => 1,
                'title' => 'Линзы',
                'created_at' => '2020-02-09 19:38:35',
                'updated_at' => '2019-02-09 19:38:35',
            ),
            2 => 
            array (
                'id' => 3,
                'parent_id' => 0,
                'is_group' => 1,
                'title' => 'Аксессуары',
                'created_at' => '2020-02-09 19:39:05',
                'updated_at' => '2020-02-09 19:39:06',
            ),
            3 => 
            array (
                'id' => 4,
                'parent_id' => 0,
                'is_group' => 1,
                'title' => 'Готовые очки',
                'created_at' => '2020-02-09 19:39:18',
                'updated_at' => '2020-02-09 19:39:19',
            ),
            4 => 
            array (
                'id' => 5,
                'parent_id' => 1,
                'is_group' => 1,
                'title' => 'Ободковые',
                'created_at' => '2020-02-09 19:45:29',
                'updated_at' => '2020-02-09 19:45:30',
            ),
            5 => 
            array (
                'id' => 6,
                'parent_id' => 1,
                'is_group' => 1,
                'title' => 'Полуободковые',
                'created_at' => '2020-02-09 19:45:49',
                'updated_at' => '2020-02-09 19:45:50',
            ),
            6 => 
            array (
                'id' => 7,
                'parent_id' => 1,
                'is_group' => 1,
                'title' => 'Безободковые',
                'created_at' => '2020-02-09 19:46:04',
                'updated_at' => '2020-02-09 19:46:05',
            ),
            7 => 
            array (
                'id' => 8,
                'parent_id' => 2,
                'is_group' => 1,
                'title' => 'Полимерные',
                'created_at' => '2020-02-09 19:48:08',
                'updated_at' => '2020-02-09 19:48:09',
            ),
            8 => 
            array (
                'id' => 9,
                'parent_id' => 2,
                'is_group' => 1,
                'title' => 'Минеральные',
                'created_at' => '2020-02-09 19:48:31',
                'updated_at' => '2020-02-09 19:48:32',
            ),
            9 => 
            array (
                'id' => 10,
                'parent_id' => 3,
                'is_group' => 1,
                'title' => 'Чехлы',
                'created_at' => '2020-02-09 20:22:35',
                'updated_at' => '2020-02-09 20:22:37',
            ),
            10 => 
            array (
                'id' => 11,
                'parent_id' => 3,
                'is_group' => 1,
                'title' => 'Салфетки',
                'created_at' => '2020-02-10 22:22:08',
                'updated_at' => '2020-02-10 22:22:09',
            ),
            11 => 
            array (
                'id' => 12,
                'parent_id' => 3,
                'is_group' => 0,
                'title' => 'Веревочка',
                'created_at' => '2020-02-10 22:22:32',
                'updated_at' => '2020-02-10 22:22:33',
            ),
            12 => 
            array (
                'id' => 13,
                'parent_id' => 5,
                'is_group' => 0,
                'title' => 'Оправа 1.1',
                'created_at' => '2020-02-10 22:24:28',
                'updated_at' => '2020-02-10 22:24:29',
            ),
            13 => 
            array (
                'id' => 14,
                'parent_id' => 5,
                'is_group' => 0,
                'title' => 'Оправа 1.2',
                'created_at' => '2020-02-10 22:24:37',
                'updated_at' => '2020-02-10 22:24:38',
            ),
            14 => 
            array (
                'id' => 15,
                'parent_id' => 5,
                'is_group' => 0,
                'title' => 'Оправа 1.3',
                'created_at' => '2020-02-10 22:24:48',
                'updated_at' => '2020-02-10 22:24:48',
            ),
            15 => 
            array (
                'id' => 16,
                'parent_id' => 6,
                'is_group' => 0,
                'title' => 'Оправа 2.1',
                'created_at' => '2020-02-10 22:25:21',
                'updated_at' => '2020-02-10 22:25:21',
            ),
            16 => 
            array (
                'id' => 17,
                'parent_id' => 6,
                'is_group' => 0,
                'title' => 'Оправа 2.2',
                'created_at' => '2020-02-10 22:25:58',
                'updated_at' => '2020-02-10 22:25:59',
            ),
            17 => 
            array (
                'id' => 18,
                'parent_id' => 6,
                'is_group' => 0,
                'title' => 'Оправа 2.3',
                'created_at' => '2020-02-10 22:26:11',
                'updated_at' => '2020-02-10 22:26:12',
            ),
            18 => 
            array (
                'id' => 19,
                'parent_id' => 7,
                'is_group' => 0,
                'title' => 'Оправа 3.1',
                'created_at' => '2020-02-10 22:26:25',
                'updated_at' => '2020-02-10 22:26:26',
            ),
            19 => 
            array (
                'id' => 20,
                'parent_id' => 7,
                'is_group' => 0,
                'title' => 'Оправа 3.2',
                'created_at' => '2020-02-10 22:26:38',
                'updated_at' => '2020-02-10 22:26:38',
            ),
            20 => 
            array (
                'id' => 21,
                'parent_id' => 7,
                'is_group' => 0,
                'title' => 'Оправа 3.3',
                'created_at' => '2020-02-10 22:26:49',
                'updated_at' => '2020-02-10 22:26:50',
            ),
            21 => 
            array (
                'id' => 22,
                'parent_id' => 8,
                'is_group' => 1,
                'title' => 'HOYA',
                'created_at' => '2020-02-10 22:29:42',
                'updated_at' => '2020-02-10 22:29:43',
            ),
            22 => 
            array (
                'id' => 23,
                'parent_id' => 8,
                'is_group' => 1,
                'title' => 'ZEISS',
                'created_at' => '2020-02-10 22:31:16',
                'updated_at' => '2020-02-10 22:31:16',
            ),
            23 => 
            array (
                'id' => 24,
                'parent_id' => 9,
                'is_group' => 1,
                'title' => 'ИОМЗ',
                'created_at' => '2020-02-10 22:31:29',
                'updated_at' => '2020-02-10 22:31:31',
            ),
            24 => 
            array (
                'id' => 25,
                'parent_id' => 9,
                'is_group' => 1,
                'title' => 'Польша',
                'created_at' => '2020-02-10 22:31:41',
                'updated_at' => '2020-02-10 22:31:42',
            ),
            25 => 
            array (
                'id' => 26,
                'parent_id' => 22,
                'is_group' => 0,
                'title' => '+1.00',
                'created_at' => '2020-02-10 22:46:14',
                'updated_at' => '2020-02-10 22:46:15',
            ),
            26 => 
            array (
                'id' => 27,
                'parent_id' => 22,
                'is_group' => 0,
                'title' => '+2.00',
                'created_at' => '2020-02-10 22:52:12',
                'updated_at' => '2020-02-10 22:52:13',
            ),
            27 => 
            array (
                'id' => 28,
                'parent_id' => 22,
                'is_group' => 0,
                'title' => '+3.00',
                'created_at' => '2020-02-10 22:52:16',
                'updated_at' => '2020-02-10 22:52:15',
            ),
            28 => 
            array (
                'id' => 29,
                'parent_id' => 22,
                'is_group' => 0,
                'title' => '-1.00',
                'created_at' => '2020-02-10 22:53:07',
                'updated_at' => '2020-02-10 22:53:08',
            ),
            29 => 
            array (
                'id' => 30,
                'parent_id' => 22,
                'is_group' => 0,
                'title' => '-2.00',
                'created_at' => '2020-02-10 22:53:09',
                'updated_at' => '2020-02-10 22:53:09',
            ),
            30 => 
            array (
                'id' => 31,
                'parent_id' => 22,
                'is_group' => 0,
                'title' => '-3.00',
                'created_at' => '2020-02-10 22:53:10',
                'updated_at' => '2020-02-10 22:53:11',
            ),
            31 => 
            array (
                'id' => 32,
                'parent_id' => 0,
                'is_group' => 1,
                'title' => 'УСЛУГИ',
                'created_at' => '2020-02-10 22:59:46',
                'updated_at' => '2020-02-10 22:59:47',
            ),
            32 => 
            array (
                'id' => 33,
                'parent_id' => 32,
                'is_group' => 0,
                'title' => 'Изготовление ободковых очков',
                'created_at' => '2020-02-10 23:00:32',
                'updated_at' => '2020-02-10 23:00:33',
            ),
            33 => 
            array (
                'id' => 34,
                'parent_id' => 32,
                'is_group' => 0,
                'title' => 'Изготовление полуободковых очков',
                'created_at' => '2020-02-10 23:01:17',
                'updated_at' => '2020-02-10 23:01:18',
            ),
            34 => 
            array (
                'id' => 35,
                'parent_id' => 32,
                'is_group' => 0,
                'title' => 'Изготовление безободковых очков',
                'created_at' => '2020-02-10 23:05:48',
                'updated_at' => '2020-02-10 23:05:49',
            ),
            35 => 
            array (
                'id' => 36,
                'parent_id' => 24,
                'is_group' => 0,
                'title' => '+1.00',
                'created_at' => '2020-02-10 23:06:13',
                'updated_at' => '2020-02-10 23:06:14',
            ),
            36 => 
            array (
                'id' => 37,
                'parent_id' => 24,
                'is_group' => 0,
                'title' => '-4.00',
                'created_at' => '2020-02-10 23:06:26',
                'updated_at' => '2020-02-10 23:06:27',
            ),
            37 => 
            array (
                'id' => 38,
                'parent_id' => 23,
                'is_group' => 0,
                'title' => '+5.00 с покрытием',
                'created_at' => '2020-02-10 23:07:16',
                'updated_at' => '2020-02-10 23:07:17',
            ),
            38 => 
            array (
                'id' => 39,
                'parent_id' => 23,
                'is_group' => 0,
                'title' => '-2.00 индекс 1.6',
                'created_at' => '2020-02-10 23:07:19',
                'updated_at' => '2020-02-10 23:07:18',
            ),
            39 => 
            array (
                'id' => 40,
                'parent_id' => 4,
                'is_group' => 1,
                'title' => 'Vizzini металл',
                'created_at' => '2020-02-10 23:09:20',
                'updated_at' => '2020-02-10 23:09:20',
            ),
            40 => 
            array (
                'id' => 41,
                'parent_id' => 4,
                'is_group' => 1,
                'title' => 'Vizzini пластик',
                'created_at' => '2020-02-10 23:09:33',
                'updated_at' => '2020-02-10 23:09:34',
            ),
            41 => 
            array (
                'id' => 42,
                'parent_id' => 40,
                'is_group' => 0,
                'title' => '+1.00',
                'created_at' => '2020-02-10 23:10:08',
                'updated_at' => '2020-02-10 23:10:07',
            ),
            42 => 
            array (
                'id' => 43,
                'parent_id' => 40,
                'is_group' => 0,
                'title' => '+2.25',
                'created_at' => '2020-02-10 23:10:04',
                'updated_at' => '2020-02-10 23:10:06',
            ),
            43 => 
            array (
                'id' => 44,
                'parent_id' => 41,
                'is_group' => 0,
                'title' => '-1.25',
                'created_at' => '2020-02-10 23:10:41',
                'updated_at' => '2020-02-10 23:10:40',
            ),
            44 => 
            array (
                'id' => 45,
                'parent_id' => 41,
                'is_group' => 0,
                'title' => '-3.75',
                'created_at' => '2020-02-10 23:10:37',
                'updated_at' => '2020-02-10 23:10:38',
            ),
            45 => 
            array (
                'id' => 46,
                'parent_id' => 11,
                'is_group' => 0,
                'title' => 'Шрек',
                'created_at' => '2020-02-10 23:11:23',
                'updated_at' => '2020-02-10 23:11:24',
            ),
            46 => 
            array (
                'id' => 47,
                'parent_id' => 11,
                'is_group' => 0,
                'title' => 'Playboy',
                'created_at' => '2020-02-10 23:11:39',
                'updated_at' => '2020-02-10 23:11:40',
            ),
            47 => 
            array (
                'id' => 48,
                'parent_id' => 11,
                'is_group' => 0,
                'title' => 'My Little Pony',
                'created_at' => '2020-02-10 23:12:26',
                'updated_at' => '2020-02-10 23:12:27',
            ),
            48 => 
            array (
                'id' => 49,
                'parent_id' => 10,
                'is_group' => 0,
                'title' => 'Чехол тряпичный',
                'created_at' => '2020-02-10 23:12:49',
                'updated_at' => '2020-02-10 23:12:50',
            ),
            49 => 
            array (
                'id' => 50,
                'parent_id' => 10,
                'is_group' => 0,
                'title' => 'Чехол пластик красный',
                'created_at' => '2020-02-10 23:13:14',
                'updated_at' => '2020-02-10 23:13:15',
            ),
        ));
        
        
    }
}