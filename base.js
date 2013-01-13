/*global Modernizr,log,_gaq*/
(function() {

	function Site() {
		var amount = $('#amount').val();
		var duration = $("#duration").val();
		function set_duration(_duration) {
			if(12 <= _duration && _duration <= 84){
				duration = _duration;
			}
			if(_duration == 3){

			}
		}

		function get_duration() {
			return duration;
		}

		function set_amount(_amount, $obj) {
			if(isNaN(_amount)){
				$obj.val(2000);
			} else {
				if(2000 <= _amount && _amount <= 50000){
					duration = _amount;
				} else {

					if(2000 > _amount) {
						$obj.val(2000);
					}

					if(50000 < _amount) {
						$obj.val(50000);
					}
				}
			}
		}

		function calculate() {
			var result = 0;
			return result;
		}

		this.initCalculator = function() {
			$('#calculator a').on('click', function() {
				var value = $("#duration").val();
				if($(this).attr('id') === 'substract'){
					set_duration(--value);
				} else {
					set_duration(++value);
				}
				$('#duration').val(get_duration());
			});

			$('#duration').on('change', function() {
				set_duration($("#duration").val());
				$('#duration').val(get_duration());
			});

			$('#amount').on('change', function() {
				set_amount(parseInt($(this).val(), 10), $(this));
			});

			$('#calculate').on('click', function() {
				calculate();
			});
		};
	}

	$(document).ready(function() {
		var site = new Site();
		site.initCalculator();
	});
})();