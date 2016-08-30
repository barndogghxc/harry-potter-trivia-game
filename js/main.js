window.alert ( "BLESS MY SOUL, IT'S A HARRY POTTER QUIZ");

var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;
		var questions = [
		[ "What does Harry want to be after he graduates?", "Professor", "Auror", "Deatheater", "Professional Quidditch Player", "B" ] ,
		[ "How many Weasly children are there?", "8", "6", "9", "7", "D" ] ,
		[ "What form does Harry's Patronus take?", "doe", "stag", "werewolf", "elephant", "B" ] ,
		[ "When is Harry's birthday?", "July 4", "December 25", "July 31", "August 15", "C" ] ,
		[ "What creatures feed on positive human emotions?", "Dementors", "Centaurs", "Boggarts", "Mermaids", "A" ] ,
		[ "Which animal is not a symbol of a Hogwarts House?", "Lion", "Badger", "Eagle", "Bear", "D" ] ,
		[ "What is Voldemort's first name?", "Lord", "Voldemort", "Tom", "Marvolo", "C" ] ,
		[ "Which is not a core of a magical wand?", "Unicorn-Tail-Hair", "Phoenix-Feather", "Dragon-Heartstring", "Mermaid-Scale", "D" ] ,
		[ "Which Professor was working with Voldemort during Harry's first year?", "McGonnagal", "Flitwick", "Quirrell", "Lockhart", "C" ] ,
		[ "What are Voldemort's followers called?", "Aurors", "Deatheaters", "Quidditch Players", "Mudbloods", "B"] 
		];

		function _(x) {
			return document.getElementById (x);
		}
		function renderQuestion(){
			test = _("test");
			if(pos >= questions.length){
				test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
				_("test_status").innerHTML = "Test Completed";
				pos = 0;
				correct = 0;
				return false;
			}
			_("test_status").innerHTML= "Question "+(pos+1)+" of "+questions.length;
			question = questions[pos] [0];
			chA = questions[pos] [1];
			chB = questions[pos] [2];
			chC = questions[pos] [3];
			chD = questions[pos] [4];
			test.innerHTML = "<h3>"+question+"</h3>";
			test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
			test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
			test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br>";
			test.innerHTML += "<input type='radio' name='choices' value='D'> "+chD+"<br><br>";
			test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
		}
		function checkAnswer () {
			choices  = document.getElementsByName ("choices");
			for(var i=0; i<choices.length; i++) {
				if(choices[i].checked) {
					choice = choices[i].value;
      			}
      		}
      		if(choice == questions[pos] [5]) {
      			correct++;
      		}
      		pos++;
      		renderQuestion () ;
      	}		
		window.addEventListener("load", renderQuestion, false);
