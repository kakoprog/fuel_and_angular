<div ng-controller="MainCtrl as ctrl">

	<nav class="navbar navbar-inverse">
		<div class="container">
			<div class="navbar-header">
				<a class="navbar-brand" href="#">Angular & Typescript</a>
			</div>
		</div>
	</nav>

	<div class="container">
		<div class="row">

			<div class="col-md-2">
					<div class="panel-group" id="menu">

						<div class="panel panel-default" ng-repeat="content in ctrl.contents">
							<div class="panel-heading">
								<h3 class="panel-title">
									<a data-toggle="collapse" data-parent="#menu" ng-click="ctrl.selectMenu($index)" ng-href="#menu{{content.menu.id}}" ng-bind="content.menu.title"></a>
								</h3>
							</div>
							<div id="menu{{content.menu.id}}" class="panel-collapse collapse" ng-class="::{in: $first}">
								<div class="panel-body" ng-repeat="subTitle in content.menu.subTitles">
									<span ng-bind="subTitle"></span>
								</div>
							</div>
						</div>

					</div>
			</div>

			<div class="col-md-10">
				<div class="jumbotron">
				  <p ng-bind="ctrl.activeContent.bodyText"></p>
				</div>
			</div>

		</div>
	</div>

</div>
