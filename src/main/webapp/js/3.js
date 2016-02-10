angular.module('myApp', [ 'datatables' ]).controller('WordsCtrl', WordsCtrl);

function WordsCtrl(DTOptionsBuilder, DTColumnBuilder) {
	var vm = this;
	vm.dtOptions = DTOptionsBuilder.fromSource(
			'http://redcontroller-richfaces.rhcloud.com/rest/word')
			.withDataProp('words').withPaginationType('full_numbers')
			.withOption('order', [ 1, 'desc' ]);

	vm.dtColumns = [ DTColumnBuilder.newColumn('word').withTitle('Word'),
			DTColumnBuilder.newColumn('count').withTitle('Count'),
			DTColumnBuilder.newColumn('frequency').withTitle('Frequency'),
			DTColumnBuilder.newColumn('density').withTitle('Density') ];
}