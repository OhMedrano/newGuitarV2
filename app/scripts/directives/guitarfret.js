'use strict';

/**
 * @ngdoc directive
 * @name newGuitarV2App.directive:guitarFret
 * @description
 * # guitarFret
 */
angular.module('newGuitarV2App')
  .directive('guitarFret', function () {
    return {
      templateUrl:'templates/guitarFret.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        	
        	scope.controlSwitch = false;
        	scope.guitarSwitch = true; 
        	scope.leftySwitch = false;
        	scope.tuningSwitch = false;
          scope.indexVal = 0;
          scope.changeIndex = function(string){

            scope.indexVal = string;

            console.log(scope.indexVal)


          };

          

        scope.musicSharps = ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#'];
      		scope.musicFlats = ['A','Bb','B','C','Db','D','Eb','E','F','Gb','G','Ab'];
      		scope.musicNotes = scope.musicSharps;
      		scope.music = 3;
      		scope.musicRoot = 3; //Starts off at C
      		scope.stringName = ['Top E','B','G','D','A','Bottom E'];
      		scope.lefty = false;
      		  scope.noteSwitched = false;
      		scope.strings = [7,2,10,5,0,7];

      		scope.scaleIntervals = [
      								{'name':'Tonic','secName':'Octave','colors':'F2291A'},
      								{'name':'Minor  Second','secName':'Minor Ninth','colors':'E58324'},
      								{'name':'Major  Second','secName':'Major Ninth','colors':'FCB11B'},
      								{'name':'Minor  Third','secName':'Minor Tenth','colors':'F2CE33'},
      								{'name':'Major  Third','secName':'Major Tenth','colors':'FCED2F'},
      								{'name':'Perfect  Fourth','secName':'Perfect 11th','colors':'BCE536'},
      								{'name':'Augmented  Fourth','secName':'Augmented 11th','colors':'64FC2F'},
      								{'name':'Perfect  Fifth','secName':'Perfect 12th','colors':'33E5BC'},
      								{'name':'Minor  Sixth','secName':'Minor 13th','colors':'2b61f2'},
      								{'name':'Major  Sixth','secName':'Major 13th','colors':'8F34E5'},
      								{'name':'Minor  Seventh','secName':'Minor 14th','colors':'E92DFC'},
      								{'name':'Major  Seventh','secName':'Major 14th','colors':'F24493'}  								
      		]
      		scope.allScale = [		  
                          			        {'name':'Major/Ionian','scale':[0,2,4,5,7,9,11]},
      						        {'name':'Minor/Aeolian','scale':[0,2,3,5,7,8,10]},
      						        {'name':'Dorian','scale':[0,2,3,5,7,9,10]},
      						        {'name':'Phrygian','scale':[0,1,3,5,7,8,10]},
      						        {'name':'Lydian','scale':[0,2,4,6,7,9,11]},
      						        {'name':'Mixolydian','scale':[0,2,4,5,7,9,10]},
      						        {'name':'Locrian','scale':[0,1,3,5,6,8,10]},
      						        {'name':'Minor Pentatonic','scale':[0,3,5,7,10]},
      						        {'name':'Major Pentatonic','scale':[0,2,4,7,9]},
      						        {'name':'Minor Blues','scale':[0,3,5,6,7,10]},
      						        {'name':'Harmonic Minor','scale':[0,2,3,5,7,8,11]},
      						        {'name':'Melodic Minor','scale':[0,2,3,5,7,9,11]},
      						        {'name':'Diminished / 8-Tone','scale':[0,2,3,5,6,8,11]},
                                                  {'name':'Persian','scale':[0,1,4,5,6,8,10]},
                                                  {'name':'Hirajoshi','scale':[0,2,3,7,8]},
                                                  {'name':'Kumoi','scale':[0,2,3,7,9]},
                                                  {'name':'Chinese','scale':[0,4,6,7,11]},
                                                  {'name':'Egyptian','scale':[0,2,5,7,10]},
                                                  {'name':'Hungarian Gypsy','scale':[0,1,4,7,9]},
                                                  {'name':'Romanian','scale':[0,2,3,6,7,9,10]},
                                                  {'name':'Neopolitan Minor','scale':[0,1,3,5,7,8,11]},
                                                  {'name':'Neopolitan Major','scale':[0,1,4,6,7,8,10]},
                                                  {'name':'Prometheus','scale':[0,2,4,6,10]},
                                                  {'name':'Ritusen','scale':[0,2,5,7,9]}
      						];          
      						scope.tunings = [
      				{'name':'Standard','forumla':[7,2,10,5,0,7]},
      				{'name':'D Tuning','forumla':[5,0,8,3,11,5]},
      				{'name':'C Tuning','forumla':[3,10,6,1,8,3]},
      				{'name':'B Tuning','forumla':[2,11,5,0,7,2]},
      				{'name':'Full Step Down','forumla':[5,0,8,3,10,5]},
      				{'name':'Minor Third','forumla':[6,3,0,9,6,3]},
      				{'name':'All Fourths','forumla':[7,3,8,5,0,8]},
      				{'name':'Major Sixth','forumla':[0,3,6,9,0,3]},
      				{'name':'Open A','forumla':[7,0,7,4,0,7]},
      				{'name':'Open B','forumla':[6,2,9,2,9,2]},
      				{'name':'Open C','forumla':[7,3,10,3,10,3]},
      				{'name':'Open D','forumla':[5,0,9,5,0,5]},
      				{'name':'DADDAD','forumla':[5,0,5,5,0,5]},
      				{'name':'Cello/Standard','forumla':[7,2,0,5,11,7]},
      				{'name':'Hot Type','forumla':[5,0,9,7,2,0]},
      				{'name':'Augmented Fourths','forumla':[9,3,9,3,9,3]}


      		];
      		const named = 'custom';
      		scope.tuneName = angular.copy(named);
      		scope.currentScale = scope.allScale[0].scale;
      		scope.pickedScale = [];
      		scope.scaleName;
      		scope.scaleInterNames;
      		scope.scaleColors;
      		
      		scope.changeNote = function(string,note){
      			
      			scope.tuneName = angular.copy(named);

      			scope.strings[string] = angular.copy(this.$index);
      			
      			
      		};
      		scope.changeGroup = function(chang,name){
      			
      			scope.tuneName = angular.copy(name);
      			scope.changeTuning = chang;
      			scope.strings = angular.copy(scope.changeTuning);

      			

      		};
      		  

      		scope.pickTone = function(note){
      			scope.musicRoot = note;
      		};

      		scope.pickScale = function(scale){
      			scope.pickedScale = scale.scale;
      			scope.scaleName = scale.name;
      		}

      		scope.changeScale = function(scale,key){
      			var altNotes = [];
      			var keyNotes = [];
      			var keyNames = [];
      			var keyColors = [];
      			//Builds the alternate order of music notes. 
      			for(var x=0;x<scope.musicNotes.length;x++){
      				if(x == key){
      					altNotes.push(x);
      					for(var i=1;i<=scope.musicNotes.length-1;i++){
      						altNotes.push((x+i)%12);
      					}
      				}
      			};
      			//
      			//Plucks out the key notes in the alternate music notes
      			for(var y=0;y<=scale.length-1;y++){
      				keyNotes.push(altNotes[scale[y]]);
      				keyColors.push('#'+scope.scaleIntervals[scale[y]].colors);
      				keyNames.push(scope.scaleIntervals[scale[y]].name);

      			};
      			//

      			//currentScale inherits the scale notes
      			scope.currentScale = keyNotes;
      			
      			scope.scaleColors = keyColors;
      			scope.scaleInterNames = keyNames;

      			//




      		};

      		scope.changeScale(pickedScale,musicRoot);
      }
    };
  });
