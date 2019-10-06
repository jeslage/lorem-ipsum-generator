<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CreateHtmlController extends Controller
{
    public function createHtmlFile(Request $request)
    {
        $html = view('createHtml')->with(["settings" => $request])->render();

        $response = response($html, 200, [
            'Content-Type' => 'text/html',
        ]);

        return $response;
    }
}
