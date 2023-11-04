function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'views/skills-member.html',
        scope: {
            member: '='
        },
        controller: function ($scope, $element, $attrs) {
            $scope.member = $scope.member;
        }
    };
}