console.log("main.js実行開始");
bomb_num=[];
//開いたパネルの数
pass=0;
var panel_1_1 = document.getElementById("panel_1_1");
var panel_1_2 = document.getElementById("panel_1_2");
var panel_1_3 = document.getElementById("panel_1_3");
var panel_1_4 = document.getElementById("panel_1_4");
var panel_1_5 = document.getElementById("panel_1_5");
var panel_1_6 = document.getElementById("panel_1_6");
var panel_1_7 = document.getElementById("panel_1_7");
var panel_1_8 = document.getElementById("panel_1_8");
var panel_1_9 = document.getElementById("panel_1_9");
var panel_2_1 = document.getElementById("panel_2_1");
var panel_2_2 = document.getElementById("panel_2_2");
var panel_2_3 = document.getElementById("panel_2_3");
var panel_2_4 = document.getElementById("panel_2_4");
var panel_2_5 = document.getElementById("panel_2_5");
var panel_2_6 = document.getElementById("panel_2_6");
var panel_2_7 = document.getElementById("panel_2_7");
var panel_2_8 = document.getElementById("panel_2_8");
var panel_2_9 = document.getElementById("panel_2_9");
var panel_3_1 = document.getElementById("panel_3_1");
var panel_3_2 = document.getElementById("panel_3_2");
var panel_3_3 = document.getElementById("panel_3_3");
var panel_3_4 = document.getElementById("panel_3_4");
var panel_3_5 = document.getElementById("panel_3_5");
var panel_3_6 = document.getElementById("panel_3_6");
var panel_3_7 = document.getElementById("panel_3_7");
var panel_3_8 = document.getElementById("panel_3_8");
var panel_3_9 = document.getElementById("panel_3_9");
var panel_4_1 = document.getElementById("panel_4_1");
var panel_4_2 = document.getElementById("panel_4_2");
var panel_4_3 = document.getElementById("panel_4_3");
var panel_4_4 = document.getElementById("panel_4_4");
var panel_4_5 = document.getElementById("panel_4_5");
var panel_4_6 = document.getElementById("panel_4_6");
var panel_4_7 = document.getElementById("panel_4_7");
var panel_4_8 = document.getElementById("panel_4_8");
var panel_4_9 = document.getElementById("panel_4_9");
var panel_5_1 = document.getElementById("panel_5_1");
var panel_5_2 = document.getElementById("panel_5_2");
var panel_5_3 = document.getElementById("panel_5_3");
var panel_5_4 = document.getElementById("panel_5_4");
var panel_5_5 = document.getElementById("panel_5_5");
var panel_5_6 = document.getElementById("panel_5_6");
var panel_5_7 = document.getElementById("panel_5_7");
var panel_5_8 = document.getElementById("panel_5_8");
var panel_5_9 = document.getElementById("panel_5_9");
var panel_6_1 = document.getElementById("panel_6_1");
var panel_6_2 = document.getElementById("panel_6_2");
var panel_6_3 = document.getElementById("panel_6_3");
var panel_6_4 = document.getElementById("panel_6_4");
var panel_6_5 = document.getElementById("panel_6_5");
var panel_6_6 = document.getElementById("panel_6_6");
var panel_6_7 = document.getElementById("panel_6_7");
var panel_6_8 = document.getElementById("panel_6_8");
var panel_6_9 = document.getElementById("panel_6_9");
var panel_7_1 = document.getElementById("panel_7_1");
var panel_7_2 = document.getElementById("panel_7_2");
var panel_7_3 = document.getElementById("panel_7_3");
var panel_7_4 = document.getElementById("panel_7_4");
var panel_7_5 = document.getElementById("panel_7_5");
var panel_7_6 = document.getElementById("panel_7_6");
var panel_7_7 = document.getElementById("panel_7_7");
var panel_7_8 = document.getElementById("panel_7_8");
var panel_7_9 = document.getElementById("panel_7_9");
var panel_8_1 = document.getElementById("panel_8_1");
var panel_8_2 = document.getElementById("panel_8_2");
var panel_8_3 = document.getElementById("panel_8_3");
var panel_8_4 = document.getElementById("panel_8_4");
var panel_8_5 = document.getElementById("panel_8_5");
var panel_8_6 = document.getElementById("panel_8_6");
var panel_8_7 = document.getElementById("panel_8_7");
var panel_8_8 = document.getElementById("panel_8_8");
var panel_8_9 = document.getElementById("panel_8_9");
var panel_9_1 = document.getElementById("panel_9_1");
var panel_9_2 = document.getElementById("panel_9_2");
var panel_9_3 = document.getElementById("panel_9_3");
var panel_9_4 = document.getElementById("panel_9_4");
var panel_9_5 = document.getElementById("panel_9_5");
var panel_9_6 = document.getElementById("panel_9_6");
var panel_9_7 = document.getElementById("panel_9_7");
var panel_9_8 = document.getElementById("panel_9_8");
var panel_9_9 = document.getElementById("panel_9_9");
panel_num=[panel_1_1,panel_1_2,panel_1_3,panel_1_4,panel_1_5,panel_1_6,panel_1_7,panel_1_8,panel_1_9,
    panel_2_1,panel_2_2,panel_2_3,panel_2_4,panel_2_5,panel_2_6,panel_2_7,panel_2_8,panel_2_9,
    panel_3_1,panel_3_2,panel_3_3,panel_3_4,panel_3_5,panel_3_6,panel_3_7,panel_3_8,panel_3_9,
    panel_4_1,panel_4_2,panel_4_3,panel_4_4,panel_4_5,panel_4_6,panel_4_7,panel_4_8,panel_4_9,
    panel_5_1,panel_5_2,panel_5_3,panel_5_4,panel_5_5,panel_5_6,panel_5_7,panel_5_8,panel_5_9,
    panel_6_1,panel_6_2,panel_6_3,panel_6_4,panel_6_5,panel_6_6,panel_6_7,panel_6_8,panel_6_9,
    panel_7_1,panel_7_2,panel_7_3,panel_7_4,panel_7_5,panel_7_6,panel_7_7,panel_7_8,panel_7_9,
    panel_8_1,panel_8_2,panel_8_3,panel_8_4,panel_8_5,panel_8_6,panel_8_7,panel_8_8,panel_8_9,
    panel_9_1,panel_9_2,panel_9_3,panel_9_4,panel_9_5,panel_9_6,panel_9_7,panel_9_8,panel_9_9];
panel_condition=[
    0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0
]
//爆弾の個数(20~25個)
random_start=Math.floor(Math.random()*6)+20;
for(let i=0;i<=random_start;++i){
    //panel_num配列のインデックス用
    bomb_posi=Math.floor(Math.random()*102);
    //爆弾用の配列
    bomb_num.push(panel_num[bomb_posi]);
}
bomb_only = bomb_num.filter((element, index) => bomb_num.indexOf(element) === index);
bomb_onlys = bomb_only.filter(item => item !== null);
eruption_num = bomb_onlys.filter(item => item !== undefined);
buttonClick=(panel_posi,row,column)=>{
    console.log("("+row+","+column+")");
    exist=0;
    for(let i=0;i<eruption_num.length;++i){
        if(eruption_num[i]===panel_posi){
            window.alert("Game Over!");
            bomb_open();
            ++exist;
            break;
        }
    }
    if(exist===0){
        ++pass;
        console.log("Safe!");
        panel_posi.style.backgroundColor="#f5deb3";
        posi_num=num(row,column)
        panel_condition[posi_num]=1;
        around_num=survey(row,column);
        if(around_num===0){
            around_open(row,column);
        }
        else if(around_num>0){
            panel_posi.innerHTML=around_num;
        }
        if((81-eruption_num.length)===pass){
            window.alert("congratulations!");
            for(n=0;n<panel_num;++n){
                panel_num[n].buttonClick=null;
            }
        }
    }
}
num=(row_sum,column_sum)=>{
    return (row_sum-1)*9+column_sum-1
}
around_open=(rows_around,columns_around)=>{
    console.log(panel_condition);
    //左
    if(columns_around>1){
        posi_num=num(rows_around,columns_around-1)
        if(panel_condition[posi_num]===0){
            ++pass;
            panel_num[posi_num].style.backgroundColor="#f5deb3";
            panel_condition[posi_num]=1;
            arounds_num=survey(rows_around,columns_around-1);
            if(arounds_num===0){
                around_open(rows_around,columns_around-1);
            }
            else if(arounds_num>0){
                panel_num[posi_num].innerHTML=arounds_num
            }
        }
    }
    //上
    if(rows_around>1){
        posi_num=num(rows_around-1,columns_around)
        if(panel_condition[posi_num]===0){
            ++pass;
            panel_num[posi_num].style.backgroundColor="#f5deb3";
            panel_condition[posi_num]=1;
            arounds_num=survey(rows_around-1,columns_around);
            if(arounds_num===0){
                around_open(rows_around-1,columns_around);
            }
            else if(arounds_num>0){
                panel_num[posi_num].innerHTML=arounds_num
            }
        }
    }
    //右
    if(columns_around<9){
        posi_num=num(rows_around,columns_around+1)
        if(panel_condition[posi_num]===0){
            ++pass;
            panel_num[posi_num].style.backgroundColor="#f5deb3";
            panel_condition[posi_num]=1;
            arounds_num=survey(rows_around,columns_around+1);
            if(arounds_num===0){
                around_open(rows_around,columns_around+1);
            }
            else if(arounds_num>0){
                panel_num[posi_num].innerHTML=arounds_num
            }
        }
    }
    //下
    if(rows_around<9){
        posi_num=num(rows_around+1,columns_around)
        if(panel_condition[posi_num]===0){
            ++pass;
            panel_num[posi_num].style.backgroundColor="#f5deb3";
            panel_condition[posi_num]=1;
            arounds_num=survey(rows_around+1,columns_around);
            if(arounds_num===0){
                around_open(rows_around+1,columns_around);
            }
            else if(arounds_num>0){
                panel_num[posi_num].innerHTML=arounds_num
            }
        }
    }
    //左上
    if(rows_around>1&&columns_around>1){
        posi_num=num(rows_around-1,columns_around-1)
        if(panel_condition[posi_num]===0){
            ++pass;
            panel_num[posi_num].style.backgroundColor="#f5deb3";
            panel_condition[posi_num]=1;
            arounds_num=survey(rows_around-1,columns_around-1);
            if(arounds_num===0){
                around_open(rows_around-1,columns_around-1);
            }
            else if(arounds_num>0){
                panel_num[posi_num].innerHTML=arounds_num
            }
        }
    }
    //右上
    if(rows_around>1&&columns_around<9){
        posi_num=num(rows_around-1,columns_around+1)
        if(panel_condition[posi_num]===0){
            ++pass;
            panel_num[posi_num].style.backgroundColor="#f5deb3";
            panel_condition[posi_num]=1;
            arounds_num=survey(rows_around-1,columns_around+1);
            if(arounds_num===0){
                around_open(rows_around-1,columns_around+1);
            }
            else if(arounds_num>0){
                panel_num[posi_num].innerHTML=arounds_num
            }
        }
    }
    //左下
    if(rows_around<9&&columns_around>1){
        posi_num=num(rows_around+1,columns_around-1)
        if(panel_condition[posi_num]===0){
            ++pass;
            panel_num[posi_num].style.backgroundColor="#f5deb3";
            panel_condition[posi_num]=1;
            arounds_num=survey(rows_around+1,columns_around-1);
            if(arounds_num===0){
                around_open(rows_around+1,columns_around-1);
            }
            else if(arounds_num>0){
                panel_num[posi_num].innerHTML=arounds_num
            }
        }
    }
    //右下
    if(rows_around<9&&columns_around<9){
        posi_num=num(rows_around+1,columns_around+1)
        if(panel_condition[posi_num]===0){
            ++pass;
            panel_num[posi_num].style.backgroundColor="#f5deb3";
            panel_condition[posi_num]=1;
            arounds_num=survey(rows_around+1,columns_around+1);
            if(arounds_num===0){
                around_open(rows_around+1,columns_around+1);
            }
            else if(arounds_num>0){
                panel_num[posi_num].innerHTML=arounds_num
            }
        }
    }
}
bomb_open=()=>{
    for(let i=0;i<eruption_num.length;++i){
        // 画像パス
        var url = 'photograph/explosion.png';
        // img要素を作成
        var image = document.createElement('img');
        image.src = url;
        // 横サイズ(px)
        image.style.width=25+"px";
        // 縦サイズ(px)
        image.style.height=25+"px";
        image.style.zIndex=150;
        image.style.position="relative";
        image.style.right=10+"px";
        image.style.bottom=10+"px";
        image.setAttribute("src", url);
        image.setAttribute("id","explosion");
        eruption_num[i].appendChild(image);
        eruption_num[i].style.backgroundColor='#ffffff';
        eruption_num[i].style.zIndex=1;
    }
    adjustment()
}
survey=(rows,columns)=>{
    bomber=0;
    //左
    if(columns>1){
        bomber+=posi(rows,columns-1);
    }
    //上
    if(rows>1){
        bomber+=posi(rows-1,columns);
    }
    //右
    if(columns<9){
        bomber+=posi(rows,columns+1);
    }
    //下
    if(rows<9){
        bomber+=posi(rows+1,columns);
    }
    //左上
    if(rows>1&&columns>1){
        bomber+=posi(rows-1,columns-1);
    }
    //右上
    if(rows>1&&columns<9){
        bomber+=posi(rows-1,columns+1);
    }
    //左下
    if(rows<9&&columns>1){
        bomber+=posi(rows+1,columns-1);
    }
    //右下
    if(rows<9&&columns<9){
        bomber+=posi(rows+1,columns+1);
    }
    console.log(bomber);
    return bomber;
}
posi=(ro,col)=>{
    console.log(panel_num[(ro-1)*9+col-1]);
    for(m=0;m<eruption_num.length;++m){
        if(panel_num[(ro-1)*9+col-1]===eruption_num[m]){
            return 1;
        }
    }
    return 0;
}
adjustment=()=>{
    count=0;adjust=0;
    for(i=0;i<panel_num.length;++i){
        if(i<9){
            for(j=0;j<eruption_num.length;++j){
                if(panel_num[i]===eruption_num[j]){
                    panel_num[i].style.top=4+"px";
                    ++count;
                }
            }
        }
        else if(i<18){
            if(i===9 && count>0){
                ++adjust;
                count=0;
            }
            for(j=0;j<eruption_num.length;++j){
                if(panel_num[i]===eruption_num[j]){
                    ++count;
                }
            }
            panel_num[i].style.bottom=adjust*7.2+"px";
            
        }
        else if(i<27){
            if(i===110 && count>0){
                ++adjust;
                count=0;
            }
            for(j=0;j<eruption_num.length;++j){
                if(panel_num[i]===eruption_num[j]){
                    ++count;
                }
            }
            panel_num[i].style.bottom=adjust*7.2+"px";
        }
        else if(i<36){
            if(i===27 && count>0){
                ++adjust;
                count=0;
            }
            for(j=0;j<eruption_num.length;++j){
                if(panel_num[i]===eruption_num[j]){
                    ++count;
                }
            }
            panel_num[i].style.bottom=adjust*7.2+"px";
        }
        else if(i<45){
            if(i===36 && count>0){
                ++adjust;
                count=0;
            }
            for(j=0;j<eruption_num.length;++j){
                if(panel_num[i]===eruption_num[j]){
                    ++count;
                }
            }
            panel_num[i].style.bottom=adjust*7.2+"px";
        }
        else if(i<54){
            if(i===45 && count>0){
                ++adjust;
                count=0;
            }
            for(j=0;j<eruption_num.length;++j){
                if(panel_num[i]===eruption_num[j]){
                    ++count;
                }
            }
            panel_num[i].style.bottom=adjust*7.2+"px";
        }
        else if(i<63){
            if(i===54 && count>0){
                ++adjust;
                count=0;
            }
            for(j=0;j<eruption_num.length;++j){
                if(panel_num[i]===eruption_num[j]){
                    ++count;
                }
            }
            panel_num[i].style.bottom=adjust*7.2+"px";
        }
        else if(i<72){
            if(i===63 && count>0){
                ++adjust;
                count=0;
            }
            for(j=0;j<eruption_num.length;++j){
                if(panel_num[i]===eruption_num[j]){
                    ++count;
                }
            }
            panel_num[i].style.bottom=adjust*7.2+"px";
        }
        else{
            if(i===72 && count>0){
                ++adjust;
                count=0;
            }
            for(j=0;j<eruption_num.length;++j){
                if(panel_num[i]===eruption_num[j]){
                    ++count;
                }
            }
            panel_num[i].style.bottom=adjust*7.2+"px";
        }
    }
}
console.log(eruption_num)
console.log("mian.js実行終了");