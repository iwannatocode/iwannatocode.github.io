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
        cont: 0,
        border_player:  '',
        border_inner_player: '',
        border_pc: '',
        border_inner_pc: '',
        rule: false
    },

    methods: {  
        click: function( player_piked ){
            this.seen = false;
            this.textGo = true;
            this.backgrond_player = `background: white url(images/icon-${player_piked}.svg) 32px 35px/ 95px 95px no-repeat;`;
            this.border_player = `color_${player_piked}_top`;
            this.border_inner_player = `color_${player_piked}_botton`;
            
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
                myapp.border_pc = `color_${pc_piked}_top`;
                myapp.border_inner_pc = `color_${pc_piked}_botton`;

                if( result == 'win'){
                    myapp.backgrond_player = `background:white url(images/icon-${player_piked}.svg) 32px 35px/ 95px 95px no-repeat;` //green
                    myapp.backgrond_pc = `background:#cccccc url(images/icon-${pc_piked}.svg) 32px 35px/ 95px 95px no-repeat;` //red
                    myapp.cont++;
                    myapp.border_pc = 'gray';
                    myapp.border_inner_pc = 'gray2';
                }
                else if( result == 'lose'){                     
                    myapp.backgrond_player = `background:#cc url(images/icon-${player_piked}.svg) 32px 35px/ 95px 95px no-repeat;` //red
                    myapp.backgrond_pc = `background:white url(images/icon-${pc_piked}.svg) 32px 35px/ 95px 95px no-repeat;` //green
                    myapp.cont = 0;
                    myapp.border_player =  'gray';
                    myapp.border_inner_player = 'gray2' ;
                } 
                
                myapp.textResultShow = true;
                myapp.textResult = 'you ' + result;
                
            }, 2500 );

        },
        playAgain: function(){
            this.seen = true;
            this.textResultShow = false;
            this.border_pc = ``;
            this.border_inner_pc = ``;
            
        },
        rules: function(){
           if( !this.rule ){ this.rule = true;}
           else this.rule = false;
        },
        closed: function(){
            this.rule = false;
        }
    },
    

});

