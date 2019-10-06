<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Johannes',
            'role' => 'admin',
            'email' => 'hello@johanneseslage.de',
            'password' => Hash::make('password'),
        ]);
        DB::table('presets')->insert([
            'name' => 'Preset 1',
            'description' => 'Testbeschreibung',
            'textType' => 'loremIpsum',
            'dateCreated' => '1570355195922',
            'settings' => 'eyJ0ZXh0VHlwZSI6InZpY3RvcnlTcGVlY2giLCJ0ZXh0V2lkdGgiOjEwMCwiYmFja2dyb3VuZENvbG9yIjoiI2M1MmMyYyIsInJlbW92ZVNwZWNpYWxDaGFyYWN0ZXJzIjpmYWxzZSwibG93ZXJjYXNlIjpmYWxzZSwidXBwZXJjYXNlIjpmYWxzZSwicGFyYWdyYXBoIjp7ImNvdW50Ijo2LCJudW1iZXJPZkNoYXJhY3RlcnMiOjEwMDAsImxpbmVIZWlnaHQiOjEuNSwibGV0dGVyU3BhY2luZyI6MCwiY3VzdG9tIjpmYWxzZSwiY3VzdG9tVGV4dCI6W10sIm1hcmdpbiI6eyJib3R0b20iOjAsInRvcCI6MCwicmlnaHQiOjE1MCwibGVmdCI6MTUwfSwiZm9udEZhbWlseSI6IidQYWxhdGlubyBMaW5vdHlwZScsICdCb29rIEFudGlxdWEnLCBQYWxhdGlubywgc2VyaWYiLCJjb2xvciI6IiMwMDAwMDAiLCJzaXplIjoxOH0sImhlYWRsaW5lIjp7Im51bWJlck9mQ2hhcmFjdGVycyI6NTAsImZyZXF1ZW5jeSI6Miwib2Zmc2V0IjowLCJsaW5lSGVpZ2h0IjoxLjUsImN1c3RvbSI6ZmFsc2UsImN1c3RvbVRleHQiOltdLCJ2aXNpYmxlIjp0cnVlLCJjb2xvciI6IiNmM2M0MDAiLCJtYXJnaW4iOnsidG9wIjoyMCwicmlnaHQiOjAsImJvdHRvbSI6MjAsImxlZnQiOjYwfSwiZm9udEZhbWlseSI6IidBcmlhbCBCbGFjaycsIEdhZGdldCwgc2Fucy1zZXJpZiIsInNpemUiOjMzfSwic3VibGluZSI6eyJudW1iZXJPZkNoYXJhY3RlcnMiOjUwLCJmcmVxdWVuY3kiOjIsIm9mZnNldCI6MSwibGluZUhlaWdodCI6MS41LCJjb2xvciI6IiMwMDAiLCJjdXN0b20iOmZhbHNlLCJjdXN0b21UZXh0IjpbXSwidmlzaWJsZSI6dHJ1ZSwibWFyZ2luIjp7InRvcCI6MjAsInJpZ2h0IjowLCJib3R0b20iOjIwLCJsZWZ0IjoxNTB9LCJzaXplIjozMSwiZm9udEZhbWlseSI6IidBcmlhbCBCbGFjaycsIEdhZGdldCwgc2Fucy1zZXJpZiJ9LCJsaXN0Ijp7InZpc2libGUiOmZhbHNlLCJmcmVxdWVuY3kiOjIsIm9mZnNldCI6MSwib3JkZXJlZExpc3QiOmZhbHNlfX0=',
        ]);
        DB::table('presets')->insert([
            'name' => 'Preset 2',
            'description' => 'Testbeschreibung',
            'textType' => 'loremIpsum',
            'dateCreated' => '1570355195922',
            'settings' => 'eyJ0ZXh0VHlwZSI6ImxvcmVtSXBzdW0iLCJ0ZXh0V2lkdGgiOjEwMCwicmVtb3ZlU3BlY2lhbENoYXJhY3RlcnMiOmZhbHNlLCJsb3dlcmNhc2UiOmZhbHNlLCJ1cHBlcmNhc2UiOmZhbHNlLCJzdWJsaW5lIjp7ImZvbnRGYW1pbHkiOiItYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCwnU2Vnb2UgVUknLFJvYm90byxPeHlnZW4tU2FucyxVYnVudHUsQ2FudGFyZWxsLCdIZWx2ZXRpY2EgTmV1ZScsc2Fucy1zZXJpZiIsInZpc2libGUiOmZhbHNlLCJudW1iZXJPZkNoYXJhY3RlcnMiOjUwLCJmcmVxdWVuY3kiOjIsIm9mZnNldCI6MSwic2l6ZSI6MjQsImxpbmVIZWlnaHQiOjEuNSwiY29sb3IiOiIjMDAwIiwibWFyZ2luIjp7InRvcCI6MjAsInJpZ2h0IjowLCJib3R0b20iOjIwLCJsZWZ0IjowfSwiY3VzdG9tIjpmYWxzZSwiY3VzdG9tVGV4dCI6W119LCJsaXN0Ijp7InZpc2libGUiOmZhbHNlLCJmcmVxdWVuY3kiOjIsIm9mZnNldCI6MSwib3JkZXJlZExpc3QiOmZhbHNlfSwiYmFja2dyb3VuZENvbG9yIjoiIzM3MjQ3ZiIsInBhcmFncmFwaCI6eyJmb250RmFtaWx5IjoiLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsJ1NlZ29lIFVJJyxSb2JvdG8sT3h5Z2VuLVNhbnMsVWJ1bnR1LENhbnRhcmVsbCwnSGVsdmV0aWNhIE5ldWUnLHNhbnMtc2VyaWYiLCJjb3VudCI6NiwibnVtYmVyT2ZDaGFyYWN0ZXJzIjoxMDAwLCJsaW5lSGVpZ2h0IjoxLjUsImxldHRlclNwYWNpbmciOjAsIm1hcmdpbiI6eyJ0b3AiOjIwLCJyaWdodCI6MCwiYm90dG9tIjoyMCwibGVmdCI6MH0sImN1c3RvbSI6ZmFsc2UsImN1c3RvbVRleHQiOltdLCJjb2xvciI6IiNmZDJlZDUiLCJzaXplIjoyM30sImhlYWRsaW5lIjp7Im51bWJlck9mQ2hhcmFjdGVycyI6NTAsImZyZXF1ZW5jeSI6Miwib2Zmc2V0IjowLCJzaXplIjozMCwibGluZUhlaWdodCI6MS41LCJtYXJnaW4iOnsidG9wIjoyMCwicmlnaHQiOjAsImJvdHRvbSI6MjAsImxlZnQiOjB9LCJjdXN0b20iOmZhbHNlLCJjdXN0b21UZXh0IjpbXSwidmlzaWJsZSI6dHJ1ZSwiZm9udEZhbWlseSI6IidBcmlhbCBCbGFjaycsIEdhZGdldCwgc2Fucy1zZXJpZiIsImNvbG9yIjoiI2QxZDQwZiJ9fQ==',
        ]);
    }
}
