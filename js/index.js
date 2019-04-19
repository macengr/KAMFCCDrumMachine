// !! IMPORTANT README:
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 
/***********
INSTRUCTIONS:
  - Select the project you would
    like to complete from the dropdown
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank
    pen.
  - Click the "TESTS" button to see
    the individual test cases.
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go
    from red to green.
  - As you start to build out your
    project, when tests are failing,
    you should get helpful errors
    along the way!
    ************/
// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!
// Once you have read the above messages, you can delete all comments. 
// app.js
var _a = ng.core, Component = _a.Component, VERSION = _a.VERSION;
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "FCC Drum Machine 20000";
        this.running = false;
        this.bankOne = true;
        console.log(this.running);
    }
    AppComponent.prototype.onKeyDown = function (ev) {
        var letter = ev.key;
        console.log("The user just pressed " + ev.key + "!");
        switch (ev.key) {
            case 'q':
                document.getElementById('bim').click();
                break;
            case 'w':
                document.getElementById('bam').click();
                break;
            case 'e':
                document.getElementById('boom').click();
                break;
            case 'a':
                document.getElementById('biff').click();
                break;
            case 's':
                document.getElementById('boff').click();
                break;
            case 'd':
                document.getElementById('baff').click();
                break;
            case 'z':
                document.getElementById('ping').click();
                break;
            case 'x':
                document.getElementById('pang').click();
                break;
            case 'c':
                document.getElementById('pong').click();
                break;
            default:
                console.log('That\'s just a generic key. No sound.');
        }
    };
    AppComponent.prototype.onClickMe = function () {
        if (!this.running) {
            console.log('Dude, it is not on!');
            return;
        }
        else {
            console.log("Boom!!!", event.srcElement.id);
            var dude = event.srcElement.id;
            switch (dude) {
                case 'bim':
                    this.dude = dude;
                    break;
                case 'bam':
                    this.dude = dude;
                    break;
                case 'boom':
                    this.dude = dude;
                    break;
                case 'biff':
                    this.dude = dude;
                    break;
                case 'boff':
                    this.dude = dude;
                    break;
                case 'baff':
                    this.dude = dude;
                    break;
                case 'ping':
                    this.dude = dude;
                    break;
                case 'pang':
                    this.dude = dude;
                    break;
                case 'pong':
                    this.dude = dude;
                    break;
                default:
                    console.log('That\'s just a generic key. No sound.');
            }
        }
    };
    AppComponent.prototype.powerToggle = function () {
        console.log('Here I am!!');
        console.log('running was ', this.running);
        this.running = !this.running;
        this.dude = "";
        console.log('running is now ', this.running);
    };
    AppComponent.prototype.banksToggle = function () {
        console.log('Here I am!!');
        console.log('bank was ', this.bankOne);
        this.bankOne = !this.bankOne;
        console.log('bank is now ', this.bankOne);
    };
    AppComponent = __decorate([
        Component({
            selector: 'my-app',
            host: {
                '(document:keydown)': 'onKeyDown($event)'
            },
            template: "\n<div class=\"container-fluid table-top\">\n  <h1>{{title}}</h1>\n  <div class=\"row toy\">\n    <div class=\"col\" [ngClass]=\"running ? 'buttons' : 'disabledButtons'\">\n      <div class=\"row pads\">\n        <div class=\"drum-pad\" onclick=\"document.getElementById('Q').play()\" (click)=\"onClickMe()\" id=\"bim\"><audio src=\"https://s3.amazonaws.com/freecodecamp/simonSound1.mp3\" class=\"clip\" id=\"Q\"></audio>Q</div>\n\n        <div class=\"drum-pad\" onclick=\"document.getElementById('W').play()\" (click)=\"onClickMe()\" id=\"bam\"><audio src=\"https://s3.amazonaws.com/freecodecamp/simonSound1.mp3\" class=\"clip\" id=\"W\"></audio>W</div>\n\n        <div class=\"drum-pad\"  onclick=\"document.getElementById('E').play()\" (click)=\"onClickMe()\" id=\"boom\"><audio src=\"https://s3.amazonaws.com/freecodecamp/simonSound1.mp3\" class=\"clip\" id=\"E\"></audio>E</div>\n\n      </div>\n      <div class=\"row pads\">\n\n        <div class=\"drum-pad\" onclick=\"document.getElementById('A').play()\" (click)=\"onClickMe()\" id=\"biff\"><audio src=\"https://s3.amazonaws.com/freecodecamp/simonSound1.mp3\" class=\"clip\" id=\"A\"></audio>A</div>\n\n        <div class=\"drum-pad\" onclick=\"document.getElementById('S').play()\" (click)=\"onClickMe()\" id=\"boff\"><audio src=\"https://s3.amazonaws.com/freecodecamp/simonSound1.mp3\" class=\"clip\" id=\"S\"></audio>S</div>\n\n        <div class=\"drum-pad\" onclick=\"document.getElementById('D').play()\" (click)=\"onClickMe()\" id=\"baff\"><audio src=\"https://s3.amazonaws.com/freecodecamp/simonSound1.mp3\" class=\"clip\" id=\"D\"></audio>D</div>\n\n      </div>\n      <div class=\"row pads\">\n\n        <div class=\"drum-pad\" onclick=\"document.getElementById('Z').play()\" (click)=\"onClickMe()\" id=\"ping\"><audio src=\"https://s3.amazonaws.com/freecodecamp/simonSound1.mp3\" class=\"clip\" id=\"Z\"></audio>Z</div>\n\n        <div class=\"drum-pad\" onclick=\"document.getElementById('X').play()\" (click)=\"onClickMe()\" id=\"pang\"><audio src=\"https://s3.amazonaws.com/freecodecamp/simonSound1.mp3\" class=\"clip\" id=\"X\"></audio>X</div>\n\n        <div class=\"drum-pad\" onclick=\"document.getElementById('C').play()\" (click)=\"onClickMe()\" id=\"pong\"><audio src=\"https://s3.us-east-2.amazonaws.com/fccdrummachinefiles/162313__britishpirate93__16-inch-crash.wav\" class=\"clip\" id=\"C\"></audio>C</div>\n\n      </div> <!-- ends row -->\n    </div> <!-- ends buttons -->\n\n  <div class=\"col controls\">\n\n    <div class=\"row power\">\n      <div class=\"col text-center\">\n          Power\n        <div class=\"row\">\n          <div class=\"powerSwitch\">\n            <div [ngClass]=\"running ? 'onOffSwitchOff' : 'onOffSwitchOn'\" (click)=\"powerToggle()\">\n            </div>\n          </div>\n        </div> \n      </div>\n\t </div>\n    \n    <div class=\"row\">\n      <div class=\"justify-content\" id=\"display\">\n        {{ dude }} \n        </div>\n    </div>\n    \n\n\n    <div class=\"row justify-content volume\">\n\t\t  <div class=\"col text-center\">\n        Volume slider will go here\n      </div>\n\t  </div>\n\t\n<div class=\"row justify-content banks\">\n\t<div class=\"col\">\n\t  <div class=\"row text-center banksLabel\">\n      <div class=\"col text-center\">\n\t\tBanks\n</div>\n\t  </div>\n\t  <div class=\"row\">\n\t\t<div class=\"banksSwitch\" [ngStyle]=\"{'pointer-event':running === true ? auto : none }\">\n\t\t  <div [ngClass]=\"bankOne ? 'bankOneOn' : 'bankOneOff'\" (click)=\"banksToggle()\">\n\t\t  </div>\n\t\t</div>\n\t  </div>\n\t</div> \n</div>\n    \n\n\n\n\n  </div>\n\n  </div>\n</div> <!-- end table-top -->\n  "
        })
    ], AppComponent);
    return AppComponent;
}());
// main.js
var BrowserModule = ng.platformBrowser.BrowserModule;
var NgModule = ng.core.NgModule;
var CommonModule = ng.common.CommonModule;
var FormsModule = ng.forms.FormsModule;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            imports: [
                BrowserModule,
                FormsModule,
                CommonModule,
            ],
            declarations: [AppComponent],
            bootstrap: [AppComponent],
            providers: []
        })
    ], AppModule);
    return AppModule;
}());
var platformBrowserDynamic = ng.platformBrowserDynamic.platformBrowserDynamic;
platformBrowserDynamic()
    .bootstrapModule(AppModule)["catch"](function (err) { return console.error(err); });
/*

<audio
        controls
        src="/media/examples/t-rex-roar.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
    
    audio controls src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3" class="clip" id="Q">
    </audio>
    */