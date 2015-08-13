namespace app.components.people {
	'use strict';

	interface IPeopleScope {
		people: string;
	}

	class People implements ng.IDirective {
		static $inject: Array<string> = [];
		constructor() { }

		static instance(): ng.IDirective {
			return new People();
		}

		scope: IPeopleScope = {
			people: '='
		};
		templateUrl: string = 'app/components/people/people.html';
		restrict: string = 'E';
		controller: typeof PeopleController = PeopleController;
		controllerAs: string = 'vm';
		bindToController: boolean = true;
	}

	class PeopleController {
		static $inject: Array<string> = [];
		constructor() { }

		clickPerson = (person: any): void => {
			window.alert(JSON.stringify(person));
		}
	}

	angular
		.module('app.components.people')
		.directive('htPeople', People.instance);
}