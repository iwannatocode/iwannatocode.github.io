var myapp = new Vue({
    el:'#app',

    data:{
        seen: true,
        textGo: false,
        textResultShow: false,
        array: [ 'scissors', 'rock', 'spock', 'lizard', 'paper' ],
        backgrond_pc: 'padding: 1px;',
        backgrond_player: 'padding: 1px;',
        textResult : '',
        cont: 0
    },

    methods: {  
        click: function( player_piked ){
            this.seen = false;
            this.textGo = true;
            this.backgrond_player = `background: white url(images/icon-${player_piked}.svg) 32px 35px/ 95px 95px no-repeat;`;
          
            
            let pc_piked = this.array [ Math.floor( Math.random() * 5)], result ='draw';

            if( player_piked == 'scissors'){
                if( pc_piked == 'rock' || pc_piked == 'spock' )
                    result = 'lose';
                else if( pc_piked == 'paper' || pc_piked == 'lizard')
                    result = 'win';
            }
            else if( player_piked == 'rock'){
                    if( pc_piked == 'paper' || pc_piked == 'spock' )
                        result = 'lose';
                    else if( pc_piked == 'scissors' || pc_piked == 'lizard')
                        result = 'win';
            }
            else if( player_piked == 'spock'){
                    if( pc_piked == 'paper' || pc_piked == 'lizard' )
                        result = 'lose';
                    else if( pc_piked == 'scissors' || pc_piked == 'paper')
                        result = 'win';
                }
            else if( player_piked == 'lizard'){
                    if( pc_piked == 'rock' || pc_piked == 'scissors' )
                        result = 'lose';
                    else if( pc_piked == 'paper' || pc_piked == 'spock')
                        result = 'win';
            }
            else if( player_piked == 'paper'){
                    if( pc_piked == 'lizard' || pc_piked == 'scissors' )
                        result = 'lose';
                    else if( pc_piked == 'rock' || pc_piked == 'spock')
                        result = 'win';
            }  

            // this.backgrond_pc = `background: white url(images/icon-${pc_piked}.svg) 32px 35px/ 95px 95px no-repeat;`;
            setTimeout( function(){

                myapp.backgrond_pc = `background: white url(images/icon-${pc_piked}.svg) 32px 35px/ 95px 95px no-repeat;`;
                
                if( result == 'win'){
                    myapp.backgrond_player = `background: rgb(74, 233, 87) url(images/icon-${player_piked}.svg) 32px 35px/ 95px 95px no-repeat;` //green
                    myapp.backgrond_pc = `background: rgb(224, 83, 83) url(images/icon-${pc_piked}.svg) 32px 35px/ 95px 95px no-repeat;` //red
                    myapp.cont++;
                }
                else if( result == 'lose'){                     
                    myapp.backgrond_player = `background:rgb(224, 83, 83) url(images/icon-${player_piked}.svg) 32px 35px/ 95px 95px no-repeat;` //red
                    myapp.backgrond_pc = `background: rgb(74, 233, 87) url(images/icon-${pc_piked}.svg) 32px 35px/ 95px 95px no-repeat;` //green
                    myapp.cont = 0;
                }
                
                myapp.textResultShow = true;
                myapp.textResult = 'you ' + result;
                
            }, 2500 );

        },
        playAgain: function(){
            this.seen = true;
            myapp.textResultShow = false;
            
        }
    },
    

});