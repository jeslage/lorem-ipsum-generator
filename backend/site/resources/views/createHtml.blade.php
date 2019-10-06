<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
    </head>
    <link rel="stylesheet" src="https://raw.githubusercontent.com/necolas/normalize.css/master/normalize.css" />

    <style>
        body {
            padding: 20px;
            background: {{$settings["backgroundColor"]}};
        }

        main {
            width: {{$settings["textWidth"]}};
            text-transform: {{$settings["textTransform"]}};
        }

        p, ol, ul {
            font-family: {!! $settings["paragraph"]["fontFamily"] !!};
            font-size: {{$settings["paragraph"]["size"]}}px;
            letter-spacing: {{$settings["paragraph"]["letterSpacing"]}}px;
            line-height: {{$settings["paragraph"]["lineHeight"]}};
            color: {{$settings["paragraph"]["color"]}};
            text-align: {{$settings["paragraph"]["textAlign"]}};
            margin: {{$settings["paragraph"]["margin"]["top"]}}px {{$settings["paragraph"]["margin"]["right"]}}px {{$settings["paragraph"]["margin"]["bottom"]}}px {{$settings["paragraph"]["margin"]["left"]}}px;
        }

        @if ($settings["headline"]["visible"])
        h2 {
            font-family: {!! $settings["headline"]["fontFamily"] !!};
            font-size: {{$settings["headline"]["size"]}}px;
            line-height: {{$settings["headline"]["lineHeight"]}};
            color: {{$settings["headline"]["color"]}};
            text-align: {{$settings["headline"]["textAlign"]}};
            margin: {{$settings["headline"]["margin"]["top"]}}px {{$settings["headline"]["margin"]["right"]}}px {{$settings["headline"]["margin"]["bottom"]}}px {{$settings["headline"]["margin"]["left"]}}px;
        }
        @endif

        @if ($settings["subline"]["visible"])
        h3 {
            font-family: {!! $settings["subline"]["fontFamily"] !!};
            font-size: {{$settings["subline"]["size"]}}px;
            line-height: {{$settings["subline"]["lineHeight"]}};
            color: {{$settings["subline"]["color"]}};
            text-align: {{$settings["subline"]["textAlign"]}};
            margin: {{$settings["subline"]["margin"]["top"]}}px {{$settings["subline"]["margin"]["right"]}}px {{$settings["subline"]["margin"]["bottom"]}}px {{$settings["subline"]["margin"]["left"]}}px;
        }
        @endif
    </style>

    <body>
        <main>
            {!! $settings["htmlText"] !!}
        </main>
    </body>
</html>
