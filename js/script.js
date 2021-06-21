class Cabinet{
	constructor(){
		// конструктор класса
		this.flags = {};

		this.progressForm = 0;
		this.progressForm_steps = 8; //1 + 7
		this.progForm_arrNums = ['0%', '14%', '28%', '42%', '56%', '70%', '84%', '100%'];
		this.progForm_arCanVal = [-3, -9, -40, -140, -14, -20, -7, 0 ];
		this.progForm_index = 0;
		this.progForm_cacheElems = {
			"formBlock_1": false,
			"formBlock_2": false,
			"formBlock_3": false,
			"formBlock_4": false,
			"formBlock_5": false,
			"formBlock_6": false,
			"formBlock_7": false,
		}
	}


	getHoverCountInfo(){
		// функция ставит число обьектов в разделе сайдбара возле иконки раздела при наведении на этот раздел сайдбара
		var gotcha = function () { //собирает разделы в объект, в разделе должен находиться элемент .cabinet-count-info
			var obj = {};
			for(var i=0; i < $('.container-sidebar a').length ; i++){
				if( $('.cabinet-count-info')[i] != undefined ){
					obj[i+''] = $('.cabinet-count-info')[i].parentNode;
				};
			};

			return obj;
		}();
		var current = 0;

		$('.container-sidebar a').on('mouseover', function() {
			var keys = Object.keys(gotcha);
			for(var i=0; i < keys.length ; i++){
				if(gotcha[i] == this){
					$(this.childNodes[1]).removeClass('invise');
				}else{
					$(gotcha[i].childNodes[1]).addClass('invise');
				};
			};
			
			
		});
	}


	getCkickEvents(){
		// функция события сворачивания блоков
		// поддерживает серии блоков
		$('#formBlock_1_edit').on('click', function(){
			$('#formBlock_1 .inputData').removeClass('invise');
			$('#formBlock_1 .dataElem').addClass('invise');
		});
		$('#formBlock_1_save, #formBlock_1_cancel').on('click', function(){
			$('#formBlock_1 .dataElem').removeClass('invise');
			$('#formBlock_1 .inputData').addClass('invise');
		});


		$('#formBlock_2_edit').on('click', function(){
			$('#formBlock_2 .inputData').removeClass('invise');
			$('#formBlock_2 .dataElem').addClass('invise');
		});
		$('#formBlock_2_save, #formBlock_2_cancel').on('click', function(){
			$('#formBlock_2 .dataElem').removeClass('invise');
			$('#formBlock_2 .inputData').addClass('invise');
		});


		$('#formBlock_3_edit').on('click', function(){
			$('#formBlock_3 .inputData').removeClass('invise');
			$('#formBlock_3 .dataElem').addClass('invise');
		});
		$('#formBlock_3_save, #formBlock_3_cancel').on('click', function(){
			$('#formBlock_3 .dataElem').removeClass('invise');
			$('#formBlock_3 .inputData').addClass('invise');
		});


		$('#formBlock_4_edit').on('click', function(){
			$('#formBlock_4 .inputData').removeClass('invise');
			$('#formBlock_4 .dataElem').addClass('invise');
		});
		$('#formBlock_4_cancel, #formBlock_4_1_cancel').on('click', function(){
			$('#formBlock_4 .dataElem').removeClass('invise');
			$('#formBlock_4 .inputData').addClass('invise');
			$('#formBlock_4 .inputData-2').addClass('invise');
		});
		$('#formBlock_4_save').on('click', function(){
			$('#formBlock_4 .inputData-2').removeClass('invise');
			$('#formBlock_4 .inputData').addClass('invise');
		});
		$('#formBlock_4_1_save').on('click', function(){
			$('#formBlock_4 .dataElem').removeClass('invise');
			$('#formBlock_4 .inputData-2').addClass('invise');
			$('#formBlock_4 .inputData').addClass('invise');
		});


		$('#formBlock_5_edit').on('click', function(){
			$('#formBlock_5 .inputData').removeClass('invise');
			$('#formBlock_5 .dataElem').addClass('invise');
		});
		$('#formBlock_5_cancel, #formBlock_5_1_cancel').on('click', function(){
			$('#formBlock_5 .dataElem').removeClass('invise');
			$('#formBlock_5 .inputData').addClass('invise');
			$('#formBlock_5 .inputData-2').addClass('invise');
		});
		$('#formBlock_5_save').on('click', function(){
			$('#formBlock_5 .inputData-2').removeClass('invise');
			$('#formBlock_5 .inputData').addClass('invise');
		});
		$('#formBlock_5_1_save').on('click', function(){
			$('#formBlock_5 .dataElem').removeClass('invise');
			$('#formBlock_5 .inputData-2').addClass('invise');
			$('#formBlock_5 .inputData').addClass('invise');
		});

		$('#formBlock_6_edit').on('click', function(){
			$('#formBlock_6 .inputData').removeClass('invise');
			$('#formBlock_6 .dataElem').addClass('invise');
		});
		$('#formBlock_6 select').on('change', function(){
			$('#formBlock_6 .dataElem').removeClass('invise');
			$('#formBlock_6 .inputData').addClass('invise');
		});

		$('#formBlock_7_edit').on('click', function(){
			$('#formBlock_7 .inputData').removeClass('invise');
			$('#formBlock_7 .dataElem').addClass('invise');
		});
		$('#formBlock_7_save, #formBlock_7_cancel').on('click', function(){
			$('#formBlock_7 .dataElem').removeClass('invise');
			$('#formBlock_7 .inputData').addClass('invise');
		});
	}


	getClickInteresIcons(){
		// функция эффекта выбора блоков "мои интересы"
		var elems = $('.interesBlock img');
		var elems_area = $('.interesBlock');
		var str = ['_v1', '_v2'];
		var flags = function(){
			var obj = {};
			for (var i = 0; i < elems.length; i++) {
				obj[i+''] = 0;
			};
			return obj;
		}();
		this.flags = flags;
		elems_area.on('click', function(){
			for (var i = 0; i < elems.length; i++) {
				if (elems[i] == event.target.childNodes[1] || elems[i] == event.target) {
					if(this.flags[i+''] == 0){
						this.flags[i] = 1;
					}else{ this.flags[i+''] = 0; };

					var str_elem =  $(elems[i]).attr('src');
					str_elem = str_elem.substr(0, str_elem.length-7);
					str_elem += (str[this.flags[i+'']] + '.png');

					$(elems[i]).attr({'src': str_elem});
					break;
				};
			};
		}.bind(this));

		// возвращает обратно при отмене
		$('#formBlock_7_cancel').on('click', function(){
			for (var i = 0; i < elems.length; i++) {
				$(elems[i]).attr({ 'src': $(elems[i]).attr('src').substr(0, $(elems[i]).attr('src').length-7) + (str[0] + '.png') });
			};
		});
	}


	getCanvasLoaderForm(){
		// функия управления идикатором прогресса заполнения формы
		// функция НЕ гибкая, нужно настраивать события, this, и пперебрать нужный pos в helperLoader для canvas
		var example = document.getElementById("progressForm");
		var ctx = example.getContext('2d');
		example.width  = 254;
        example.height = 136;
		ctx.lineWidth = 20;

		// подготавливаем
		function helperLoader(pos){
			// внутренняя дуга 
			ctx.beginPath(); 
			ctx.strokeStyle = '#ECECEC'; 
			ctx.arc(122, 134, 110, 0, Math.PI, true);
			ctx.stroke();

			ctx.strokeStyle = '#FDCA00';
			ctx.beginPath(); 
			ctx.arc(122, 134, 110, pos, Math.PI, true);
			ctx.stroke();

			ctx.beginPath();
			ctx.fillStyle = 'white';   
			ctx.strokeStyle = 'white'; 
			ctx.fillRect(0, example.height - 20, example.width, 20);
		};
		function helperEventLoader(condition, id){
			if( condition() ){	
				if(this.progForm_cacheElems[id] == false){
					this.progForm_cacheElems[id] = true;
					this.progForm_index ++;	
					if( this.progForm_index >= this.progressForm_steps ){ this.progForm_index = this.progressForm_steps-1 };
					
					helperLoader(this.progForm_arCanVal[this.progForm_index]);
					$('#progressForm_number').text(this.progForm_arrNums[this.progForm_index]);
				};
			}else{
				if(this.progForm_cacheElems[id] == true){
					this.progForm_cacheElems[id] = false;
					this.progForm_index --;	
					if(this.progForm_index < 0){this.progForm_index = 0;};
					
					helperLoader(this.progForm_arCanVal[this.progForm_index]);
					$('#progressForm_number').text(this.progForm_arrNums[this.progForm_index]);
				};
			};
			// console.log(condition());
		};



		// инициализируем
		helperLoader(-3);
		$('#formBlock_1_save').on('click', helperEventLoader.bind(this, function(){
			var flag = false;
			if( 
				$('#formBlock_1_sname').val() != undefined && 
				$('#formBlock_1_sname').val() != '' && 
				$('#formBlock_1_sname').val() != ' ' && 
				$('#formBlock_1_fname').val() != undefined &&
				$('#formBlock_1_fname').val() != '' &&
				$('#formBlock_1_fname').val() != ' '
			){flag = true;}; 
			return flag;
		}, 'formBlock_1'));

		$('#formBlock_2_save').on('click', helperEventLoader.bind(this, function(){
			var flag = false;
			if( 
				$('#sexPeople_man')[0].checked ||
				$('#sexPeople_woman')[0].checked
			){flag = true;}; 
			return flag;
		}, 'formBlock_2'));

		$('#formBlock_3_save').on('click', helperEventLoader.bind(this, function(){
			var flag = false;
			if( 
				$('#formBlock_3_day').val() &&
				$('#formBlock_3_month').val() &&
				$('#formBlock_3_year').val()
			){flag = true;}; 
			return flag;
		}, 'formBlock_3'));

		$('#formBlock_4_1_save').on('click', helperEventLoader.bind(this, function(){
			var flag = false;
			if( 
				$('#formBlock_4_number').val() &&
				$('#formBlock_4_1_codeNumber').val() 
			){flag = true;}; 
			return flag;
		}, 'formBlock_4'));

		$('#formBlock_5_1_save').on('click', helperEventLoader.bind(this, function(){
			var flag = false;
			if( 
				$('#formBlock_5_email').val() &&
				$('#formBlock_5_1_codeEmail').val() 
			){flag = true;}; 
			return flag;
		}, 'formBlock_5'));

		$('#formBlock_aboutFromUs').on('change', helperEventLoader.bind(this, function(){
			var flag = false;
			if( 
				$('#formBlock_aboutFromUs').val() != 'Выберите вариант'
			){flag = true;}; 
			return flag;
		}, 'formBlock_6'));

		$('#formBlock_7_save').on('click', helperEventLoader.bind(this, function(){
			var flag = false;
			if( 
				function () {
					for(var key in this.flags){ //если есть хотябы 1
						if(this.flags[key]){ return true; };
					}; return false;
				}.call(this)
			){flag = true;}; 
			return flag;
		}.bind(this), 'formBlock_7'));
	}


	getEventsMobile(){
		// footer_chapter
		$('.footer_mobile .footer-column h1').on('click', function(){
			var elem = this.parentNode.getElementsByClassName('footer_chapter');
			if(elem[0]){ $(elem[0]).toggleClass('invise'); };
		});

		$('.mobile-search').on('click', function(){
			$('#link_breadCrums').toggleClass('invise');
			$('#mobile_loupe_icon').toggleClass('invise');
			$('#mobile_search_input').toggleClass('invise');
		});
	}


	getWork(){
		// функция запускает все анимации и механизмы страницы
		// console.log('getWork');
		if($('.container-sidebar')){ this.getHoverCountInfo(); };
		this.getCkickEvents();
		this.getClickInteresIcons();
		if($('#progressForm')[0]){ this.getCanvasLoaderForm(); };
		this.getEventsMobile();
	}
}

// запуск
var cabinet = new Cabinet();
cabinet.getWork();