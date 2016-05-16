<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title><?php echo $title; ?></title>
    <?php echo Asset::css('bootstrap.min.css'); ?>
    <?php echo Asset::css('main.css'); ?>
    <?php echo Asset::js('jquery-2.2.3.min.js'); ?>
    <?php echo Asset::js('bootstrap.min.js'); ?>
    <?php echo Asset::js('angular.min.js'); ?>
    <?php echo Asset::js('ui-bootstrap-tpls-1.3.2.min.js'); ?>
    <?php echo Asset::js('tsc.js'); ?>
  </head>
  <body ng-app="app">
    <div id="content">
      <?php echo $content; ?>
    </div>
  </body>
</html>
