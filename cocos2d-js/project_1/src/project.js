require=function t(e,i,r){function l(n,c){if(!i[n]){if(!e[n]){var h="function"==typeof require&&require;if(!c&&h)return h(n,!0);if(o)return o(n,!0);var s=new Error("Cannot find module '"+n+"'");throw s.code="MODULE_NOT_FOUND",s}var a=i[n]={exports:{}};e[n][0].call(a.exports,function(t){var i=e[n][1][t];return l(i?i:t)},a,a.exports,t,e,i,r)}return i[n].exports}for(var o="function"==typeof require&&require,n=0;n<r.length;n++)l(r[n]);return l}({Main:[function(t,e,i){"use strict";cc._RFpush(e,"c3e3fhd2P9Al6wWyp5tYOhi","Main"),cc.Class({"extends":cc.Component,properties:{blockEdgeLength:60,fieldMapLRMargin:20,fieldMapTBMargin:40,blockTypeCount:7,fieldMapRow:20,fieldMapColumn:10,fieldMapText:{"default":null,type:cc.Object},fieldMapImage:{"default":null,type:cc.Node},Background:{"default":null,type:cc.Node},ArrowR:{"default":null,type:cc.Node},ArrowL:{"default":null,type:cc.Node},ArrowD:{"default":null,type:cc.Node},ArrowRU:{"default":null,type:cc.Node},ArrowLU:{"default":null,type:cc.Node},CurrentBlock:{"default":null,type:cc.Node},Block:{"default":null,type:cc.Prefab},BlockT:{"default":null,type:cc.Prefab},BlockI:{"default":null,type:cc.Prefab},BlockO:{"default":null,type:cc.Prefab},BlockL:{"default":null,type:cc.Prefab},BlockRL:{"default":null,type:cc.Prefab},BlockS:{"default":null,type:cc.Prefab},BlockRS:{"default":null,type:cc.Prefab},ScoreValue:{"default":null,type:cc.Label}},onLoad:function(){var t=this;this.fieldMapText=[],this.fieldMapImage=[];for(var e=0;e<this.fieldMapRow+2;e++){this.fieldMapText.push([]),this.fieldMapImage.push([]);for(var i=0;i<this.fieldMapColumn+2;i++)0===e||e===this.fieldMapRow+1?this.fieldMapText[e].push(9):0===i||i===this.fieldMapColumn+1?this.fieldMapText[e].push(9):this.fieldMapText[e].push(0),this.fieldMapImage.push(),e>0&&e<this.fieldMapRow+1&&i>0&&i<this.fieldMapColumn+1&&(this.fieldMapImage[e][i]=cc.instantiate(this.Block),this.fieldMapImage[e][i].setPosition(cc.p((i-1)*this.blockEdgeLength+this.fieldMapLRMargin,(e-1)*this.blockEdgeLength+this.fieldMapTBMargin)),this.fieldMapImage[e][i].opacity=200)}this.ArrowR.on(cc.Node.EventType.TOUCH_START,function(e){t.moveRight()}),this.ArrowL.on(cc.Node.EventType.TOUCH_START,function(e){t.moveLeft()}),this.ArrowD.on(cc.Node.EventType.TOUCH_START,function(e){t.pullDownBlock(),t.unschedule(t.blockDownCallback),t.schedule(t.blockDownCallback,.09)}),this.ArrowD.on(cc.Node.EventType.TOUCH_END,function(e){t.unschedule(t.blockDownCallback),t.schedule(t.blockDownCallback,1)}),this.ArrowD.on(cc.Node.EventType.TOUCH_CANCEL,function(e){t.unschedule(t.blockDownCallback),t.schedule(t.blockDownCallback,1)}),this.ArrowRU.on(cc.Node.EventType.TOUCH_START,function(e){t.rotateBlock("R")}),this.ArrowLU.on(cc.Node.EventType.TOUCH_START,function(e){t.rotateBlock("R")})},getBlockStartPosition:function(){return 1===this.currentBlockNum?cc.p(this.fieldMapLRMargin+this.blockEdgeLength*(this.fieldMapColumn/2),this.blockEdgeLength*this.fieldMapRow-this.fieldMapTBMargin):cc.p(this.fieldMapLRMargin+this.blockEdgeLength*(this.fieldMapColumn/2),this.blockEdgeLength*(this.fieldMapRow-1)-this.fieldMapTBMargin)},getBlockNum:function(){return Math.floor(Math.random()*this.blockTypeCount)+2},createBlockText:function(){switch(this.currentBlockNum=this.getBlockNum(),this.currentBlockNum){case 2:this.fieldMapText[this.fieldMapRow][Math.floor(this.fieldMapColumn/2)]=1,this.fieldMapText[this.fieldMapRow-1][Math.floor(this.fieldMapColumn/2)-1]=1,this.fieldMapText[this.fieldMapRow-1][Math.floor(this.fieldMapColumn/2)]=1,this.fieldMapText[this.fieldMapRow-1][Math.floor(this.fieldMapColumn/2)+1]=1,this.currentBlockCenterIdx=[this.fieldMapRow-1,Math.floor(this.fieldMapColumn/2)],this.currentBlockRotationMax=4;break;case 3:this.fieldMapText[this.fieldMapRow][Math.floor(this.fieldMapColumn/2)-1]=1,this.fieldMapText[this.fieldMapRow][Math.floor(this.fieldMapColumn/2)]=1,this.fieldMapText[this.fieldMapRow][Math.floor(this.fieldMapColumn/2)+1]=1,this.fieldMapText[this.fieldMapRow][Math.floor(this.fieldMapColumn/2)+2]=1,this.currentBlockCenterIdx=[this.fieldMapRow,Math.floor(this.fieldMapColumn/2)],this.currentBlockRotationMax=2;break;case 4:this.fieldMapText[this.fieldMapRow][Math.floor(this.fieldMapColumn/2)]=1,this.fieldMapText[this.fieldMapRow][Math.floor(this.fieldMapColumn/2)+1]=1,this.fieldMapText[this.fieldMapRow-1][Math.floor(this.fieldMapColumn/2)]=1,this.fieldMapText[this.fieldMapRow-1][Math.floor(this.fieldMapColumn/2)+1]=1,this.currentBlockCenterIdx=[this.fieldMapRow,Math.floor(this.fieldMapColumn/2)],this.currentBlockRotationMax=1;break;case 5:this.fieldMapText[this.fieldMapRow][Math.floor(this.fieldMapColumn/2)+1]=1,this.fieldMapText[this.fieldMapRow-1][Math.floor(this.fieldMapColumn/2)-1]=1,this.fieldMapText[this.fieldMapRow-1][Math.floor(this.fieldMapColumn/2)]=1,this.fieldMapText[this.fieldMapRow-1][Math.floor(this.fieldMapColumn/2)+1]=1,this.currentBlockCenterIdx=[this.fieldMapRow,Math.floor(this.fieldMapColumn/2)],this.currentBlockRotationMax=4;break;case 6:this.fieldMapText[this.fieldMapRow][Math.floor(this.fieldMapColumn/2)-1]=1,this.fieldMapText[this.fieldMapRow-1][Math.floor(this.fieldMapColumn/2)-1]=1,this.fieldMapText[this.fieldMapRow-1][Math.floor(this.fieldMapColumn/2)]=1,this.fieldMapText[this.fieldMapRow-1][Math.floor(this.fieldMapColumn/2)+1]=1,this.currentBlockCenterIdx=[this.fieldMapRow,Math.floor(this.fieldMapColumn/2)],this.currentBlockRotationMax=4;break;case 7:this.fieldMapText[this.fieldMapRow][Math.floor(this.fieldMapColumn/2)]=1,this.fieldMapText[this.fieldMapRow][Math.floor(this.fieldMapColumn/2)+1]=1,this.fieldMapText[this.fieldMapRow-1][Math.floor(this.fieldMapColumn/2)-1]=1,this.fieldMapText[this.fieldMapRow-1][Math.floor(this.fieldMapColumn/2)]=1,this.currentBlockCenterIdx=[this.fieldMapRow-1,Math.floor(this.fieldMapColumn/2)],this.currentBlockRotationMax=2;break;case 8:this.fieldMapText[this.fieldMapRow][Math.floor(this.fieldMapColumn/2)-1]=1,this.fieldMapText[this.fieldMapRow][Math.floor(this.fieldMapColumn/2)]=1,this.fieldMapText[this.fieldMapRow-1][Math.floor(this.fieldMapColumn/2)]=1,this.fieldMapText[this.fieldMapRow-1][Math.floor(this.fieldMapColumn/2)+1]=1,this.currentBlockCenterIdx=[this.fieldMapRow-1,Math.floor(this.fieldMapColumn/2)],this.currentBlockRotationMax=2}this.currentBlockRotationNum=1,this.drawBlocks()},drawBlocks:function(){for(var t=1;t<=this.fieldMapRow;t++)for(var e=1;e<=this.fieldMapColumn;e++)this.fieldMapText[t][e]>0?this.fieldMapImage[t][e].parent=cc.director.getScene():this.fieldMapImage[t][e].parent=null},start:function(){this.createBlockText(),this.schedule(this.blockDownCallback,1)},checkFullLine:function(){for(var t,e=[null],i=0,r=1;r<=this.fieldMapRow;r++){t=0;for(var l=1;l<=this.fieldMapColumn;l++)this.fieldMapText[r][l]>1&&t++;if(t===this.fieldMapColumn){e.push(!0),this.ScoreValue.string=Number(this.ScoreValue.string+1);for(var l=1;l<=this.fieldMapColumn;l++)this.fieldMapText[r][l]=0}else e.push(!1)}for(var r=1;r<=this.fieldMapRow;r++)if(e[r])i++;else if(0!==i)for(var l=1;l<=this.fieldMapColumn;l++)this.fieldMapText[r-i][l]=this.fieldMapText[r][l],this.fieldMapText[r][l]=0},blockDownCallback:function(t){this.pullDownBlock()},pullDownBlock:function(){for(var t=!1,e=0,i=1;i<=this.fieldMapRow;i++){for(var r=1;r<=this.fieldMapColumn;r++)if(1===this.fieldMapText[i][r]){if(e++,this.fieldMapText[i-1][r]>1){t=!0;break}if(4===e)break}if(4===e)break}e=0;for(var i=1;i<=this.fieldMapRow;i++){for(var r=1;r<=this.fieldMapColumn&&(1!==this.fieldMapText[i][r]||(e++,t?this.fieldMapText[i][r]=this.currentBlockNum:(this.fieldMapText[i][r]=0,this.fieldMapText[i-1][r]=1),4!==e));r++);if(4===e)break}t?(this.checkFullLine(),this.createBlockText()):(this.currentBlockCenterIdx[0]--,this.drawBlocks())},moveLeft:function(){for(var t=!1,e=0,i=1;i<=this.fieldMapRow;i++){for(var r=1;r<=this.fieldMapColumn;r++)if(1===this.fieldMapText[i][r]){if(e++,this.fieldMapText[i][r-1]>1){t=!0;break}if(4===e)break}if(4===e)break}e=0;for(var i=1;i<=this.fieldMapRow;i++){for(var r=1;r<=this.fieldMapColumn&&(1!==this.fieldMapText[i][r]||(e++,t||(this.fieldMapText[i][r]=0,this.fieldMapText[i][r-1]=1),4!==e));r++);if(4===e)break}t||(this.currentBlockCenterIdx[1]--,this.drawBlocks())},moveRight:function(){for(var t=!1,e=0,i=1;i<=this.fieldMapRow;i++){for(var r=this.fieldMapColumn;r>=1;r--)if(1===this.fieldMapText[i][r]){if(e++,this.fieldMapText[i][r+1]>1){t=!0;break}if(4===e)break}if(4===e)break}e=0;for(var i=1;i<=this.fieldMapRow;i++){for(var r=this.fieldMapColumn;r>=1&&(1!==this.fieldMapText[i][r]||(e++,t||(this.fieldMapText[i][r]=0,this.fieldMapText[i][r+1]=1),4!==e));r--);if(4===e)break}t||(this.currentBlockCenterIdx[1]++,this.drawBlocks())},rotateBlock:function(t){switch("L"===t?this.currentBlockRotationNum>1?this.currentBlockRotationNum--:this.currentBlockRotationNum=this.currentBlockRotationMax:"R"===t&&(this.currentBlockRotationNum<this.currentBlockRotationMax?this.currentBlockRotationNum++:this.currentBlockRotationNum=1),this.currentBlockNum){case 2:for(var e=this.currentBlockCenterIdx[0]-1;e<=this.currentBlockCenterIdx[0]+1;e++)for(var i=this.currentBlockCenterIdx[1]-1;i<=this.currentBlockCenterIdx[1]+1;i++)1===this.fieldMapText[e][i]&&(this.fieldMapText[e][i]=0);1===this.currentBlockRotationNum?(this.fieldMapText[this.currentBlockCenterIdx[0]+1][this.currentBlockCenterIdx[1]]=1,this.fieldMapText[this.currentBlockCenterIdx[0]][this.currentBlockCenterIdx[1]-1]=1,this.fieldMapText[this.currentBlockCenterIdx[0]][this.currentBlockCenterIdx[1]]=1,this.fieldMapText[this.currentBlockCenterIdx[0]][this.currentBlockCenterIdx[1]+1]=1):2===this.currentBlockRotationNum?(this.fieldMapText[this.currentBlockCenterIdx[0]+1][this.currentBlockCenterIdx[1]]=1,this.fieldMapText[this.currentBlockCenterIdx[0]][this.currentBlockCenterIdx[1]]=1,this.fieldMapText[this.currentBlockCenterIdx[0]][this.currentBlockCenterIdx[1]+1]=1,this.fieldMapText[this.currentBlockCenterIdx[0]-1][this.currentBlockCenterIdx[1]]=1):3===this.currentBlockRotationNum?(this.fieldMapText[this.currentBlockCenterIdx[0]][this.currentBlockCenterIdx[1]-1]=1,this.fieldMapText[this.currentBlockCenterIdx[0]][this.currentBlockCenterIdx[1]]=1,this.fieldMapText[this.currentBlockCenterIdx[0]][this.currentBlockCenterIdx[1]+1]=1,this.fieldMapText[this.currentBlockCenterIdx[0]-1][this.currentBlockCenterIdx[1]]=1):4===this.currentBlockRotationNum&&(this.fieldMapText[this.currentBlockCenterIdx[0]+1][this.currentBlockCenterIdx[1]]=1,this.fieldMapText[this.currentBlockCenterIdx[0]][this.currentBlockCenterIdx[1]-1]=1,this.fieldMapText[this.currentBlockCenterIdx[0]][this.currentBlockCenterIdx[1]]=1,this.fieldMapText[this.currentBlockCenterIdx[0]-1][this.currentBlockCenterIdx[1]]=1);break;case 3:for(var e=this.currentBlockCenterIdx[0]-2;e<=this.currentBlockCenterIdx[0]+1;e++)for(var i=this.currentBlockCenterIdx[1]-1;i<=this.currentBlockCenterIdx[1]+2;i++)1===this.fieldMapText[e][i]&&(this.fieldMapText[e][i]=0);1===this.currentBlockRotationNum?(this.fieldMapText[this.currentBlockCenterIdx[0]][this.currentBlockCenterIdx[1]-1]=1,this.fieldMapText[this.currentBlockCenterIdx[0]][this.currentBlockCenterIdx[1]]=1,this.fieldMapText[this.currentBlockCenterIdx[0]][this.currentBlockCenterIdx[1]+1]=1,this.fieldMapText[this.currentBlockCenterIdx[0]][this.currentBlockCenterIdx[1]+2]=1):2===this.currentBlockRotationNum&&(this.fieldMapText[this.currentBlockCenterIdx[0]+1][this.currentBlockCenterIdx[1]]=1,this.fieldMapText[this.currentBlockCenterIdx[0]][this.currentBlockCenterIdx[1]]=1,this.fieldMapText[this.currentBlockCenterIdx[0]-1][this.currentBlockCenterIdx[1]]=1,this.fieldMapText[this.currentBlockCenterIdx[0]-2][this.currentBlockCenterIdx[1]]=1);break;case 4:return;case 5:for(var e=this.currentBlockCenterIdx[0]-2;e<=this.currentBlockCenterIdx[0]+1;e++)for(var i=this.currentBlockCenterIdx[1]-1;i<=this.currentBlockCenterIdx[1]+2;i++)1===this.fieldMapText[e][i]&&(this.fieldMapText[e][i]=0);1===this.currentBlockRotationNum?(this.fieldMapText[this.currentBlockCenterIdx[0]-1][this.currentBlockCenterIdx[1]-1]=1,this.fieldMapText[this.currentBlockCenterIdx[0]-1][this.currentBlockCenterIdx[1]]=1,this.fieldMapText[this.currentBlockCenterIdx[0]-1][this.currentBlockCenterIdx[1]+1]=1,this.fieldMapText[this.currentBlockCenterIdx[0]][this.currentBlockCenterIdx[1]+1]=1):2===this.currentBlockRotationNum?(this.fieldMapText[this.currentBlockCenterIdx[0]+1][this.currentBlockCenterIdx[1]]=1,this.fieldMapText[this.currentBlockCenterIdx[0]][this.currentBlockCenterIdx[1]]=1,this.fieldMapText[this.currentBlockCenterIdx[0]-1][this.currentBlockCenterIdx[1]]=1,this.fieldMapText[this.currentBlockCenterIdx[0]-1][this.currentBlockCenterIdx[1]+1]=1):3===this.currentBlockRotationNum?(this.fieldMapText[this.currentBlockCenterIdx[0]-1][this.currentBlockCenterIdx[1]]=1,this.fieldMapText[this.currentBlockCenterIdx[0]][this.currentBlockCenterIdx[1]]=1,this.fieldMapText[this.currentBlockCenterIdx[0]][this.currentBlockCenterIdx[1]+1]=1,this.fieldMapText[this.currentBlockCenterIdx[0]][this.currentBlockCenterIdx[1]+2]=1):4===this.currentBlockRotationNum&&(this.fieldMapText[this.currentBlockCenterIdx[0]][this.currentBlockCenterIdx[1]]=1,this.fieldMapText[this.currentBlockCenterIdx[0]][this.currentBlockCenterIdx[1]+1]=1,this.fieldMapText[this.currentBlockCenterIdx[0]-1][this.currentBlockCenterIdx[1]+1]=1,this.fieldMapText[this.currentBlockCenterIdx[0]-2][this.currentBlockCenterIdx[1]+1]=1);break;case 6:for(var e=this.currentBlockCenterIdx[0]-2;e<=this.currentBlockCenterIdx[0]+1;e++)for(var i=this.currentBlockCenterIdx[1]-2;i<=this.currentBlockCenterIdx[1]+1;i++)1===this.fieldMapText[e][i]&&(this.fieldMapText[e][i]=0);1===this.currentBlockRotationNum?(this.fieldMapText[this.currentBlockCenterIdx[0]][this.currentBlockCenterIdx[1]-1]=1,this.fieldMapText[this.currentBlockCenterIdx[0]-1][this.currentBlockCenterIdx[1]-1]=1,this.fieldMapText[this.currentBlockCenterIdx[0]-1][this.currentBlockCenterIdx[1]]=1,this.fieldMapText[this.currentBlockCenterIdx[0]-1][this.currentBlockCenterIdx[1]+1]=1):2===this.currentBlockRotationNum?(this.fieldMapText[this.currentBlockCenterIdx[0]-2][this.currentBlockCenterIdx[1]-1]=1,this.fieldMapText[this.currentBlockCenterIdx[0]-1][this.currentBlockCenterIdx[1]-1]=1,this.fieldMapText[this.currentBlockCenterIdx[0]][this.currentBlockCenterIdx[1]-1]=1,this.fieldMapText[this.currentBlockCenterIdx[0]][this.currentBlockCenterIdx[1]]=1):3===this.currentBlockRotationNum?(this.fieldMapText[this.currentBlockCenterIdx[0]][this.currentBlockCenterIdx[1]-2]=1,this.fieldMapText[this.currentBlockCenterIdx[0]][this.currentBlockCenterIdx[1]-1]=1,this.fieldMapText[this.currentBlockCenterIdx[0]][this.currentBlockCenterIdx[1]]=1,this.fieldMapText[this.currentBlockCenterIdx[0]-1][this.currentBlockCenterIdx[1]]=1):4===this.currentBlockRotationNum&&(this.fieldMapText[this.currentBlockCenterIdx[0]-1][this.currentBlockCenterIdx[1]-1]=1,this.fieldMapText[this.currentBlockCenterIdx[0]-1][this.currentBlockCenterIdx[1]]=1,this.fieldMapText[this.currentBlockCenterIdx[0]][this.currentBlockCenterIdx[1]]=1,this.fieldMapText[this.currentBlockCenterIdx[0]+1][this.currentBlockCenterIdx[1]]=1);break;case 7:for(var e=this.currentBlockCenterIdx[0]-1;e<=this.currentBlockCenterIdx[0]+2;e++)for(var i=this.currentBlockCenterIdx[1]-1;i<=this.currentBlockCenterIdx[1]+2;i++)1===this.fieldMapText[e][i]&&(this.fieldMapText[e][i]=0);1===this.currentBlockRotationNum?(this.fieldMapText[this.currentBlockCenterIdx[0]][this.currentBlockCenterIdx[1]-1]=1,this.fieldMapText[this.currentBlockCenterIdx[0]][this.currentBlockCenterIdx[1]]=1,this.fieldMapText[this.currentBlockCenterIdx[0]+1][this.currentBlockCenterIdx[1]]=1,this.fieldMapText[this.currentBlockCenterIdx[0]+1][this.currentBlockCenterIdx[1]+1]=1):2===this.currentBlockRotationNum&&(this.fieldMapText[this.currentBlockCenterIdx[0]+1][this.currentBlockCenterIdx[1]]=1,this.fieldMapText[this.currentBlockCenterIdx[0]][this.currentBlockCenterIdx[1]]=1,this.fieldMapText[this.currentBlockCenterIdx[0]][this.currentBlockCenterIdx[1]+1]=1,this.fieldMapText[this.currentBlockCenterIdx[0]-1][this.currentBlockCenterIdx[1]+1]=1);break;case 8:for(var e=this.currentBlockCenterIdx[0]-1;e<=this.currentBlockCenterIdx[0]+2;e++)for(var i=this.currentBlockCenterIdx[1]-1;i<=this.currentBlockCenterIdx[1]+2;i++)1===this.fieldMapText[e][i]&&(this.fieldMapText[e][i]=0);1===this.currentBlockRotationNum?(this.fieldMapText[this.currentBlockCenterIdx[0]+1][this.currentBlockCenterIdx[1]-1]=1,this.fieldMapText[this.currentBlockCenterIdx[0]+1][this.currentBlockCenterIdx[1]]=1,this.fieldMapText[this.currentBlockCenterIdx[0]][this.currentBlockCenterIdx[1]]=1,this.fieldMapText[this.currentBlockCenterIdx[0]][this.currentBlockCenterIdx[1]+1]=1):2===this.currentBlockRotationNum&&(this.fieldMapText[this.currentBlockCenterIdx[0]-1][this.currentBlockCenterIdx[1]]=1,this.fieldMapText[this.currentBlockCenterIdx[0]][this.currentBlockCenterIdx[1]]=1,this.fieldMapText[this.currentBlockCenterIdx[0]][this.currentBlockCenterIdx[1]+1]=1,this.fieldMapText[this.currentBlockCenterIdx[0]+1][this.currentBlockCenterIdx[1]+1]=1)}this.drawBlocks()}}),cc._RFpop()},{}]},{},["Main"]);
//# sourceMappingURL=project.js.map