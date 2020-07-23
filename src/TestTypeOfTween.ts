import TWEEN from "@tweenjs/tween.js";
import {Tween} from "@tweenjs/tween.js";

const tweenArray01 : TWEEN.Tween[] = []; //NG
const tweenArray02 : Tween[] = [];  //NG

const tween01 = new TWEEN.Tween({x:1.0}); //OK
const tween02:TWEEN.Tween = new TWEEN.Tween({x:1.0}); //NG
const tween03:Tween = new TWEEN.Tween({x:1.0}); //NG