<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Laravel</title>

      <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>
    <body>
      <main id="app">
        <index></index>
      </main>

      <script src="{{ asset('js/dist.js') }}"></script>
    </body>
</html>
