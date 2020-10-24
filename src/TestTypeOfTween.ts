import {Tween} from "@tweenjs/tween.js";

const tweenArray : Tween<Record<string, unknown>>[] = [];  //OK
const tween:Tween<{ x:number }> = new Tween({x:1.0}); //OK