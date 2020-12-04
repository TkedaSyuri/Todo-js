import "./styles.css";

const onClickAdd = ()=>{
const inputText =document.getElementById('add-text').value;
document.getElementById('add-text').value=""
document.getElementById('')
//divタグ生成
const div =document.createElement('div');
div.className="list-row"

//liタグを生成
const li =document.createElement('li');
li.innerText=inputText;

//button(完了)タグ生成
const completeButton = document.createElement('button');
completeButton.innerText="完了";
completeButton.addEventListener('click',()=>{
  alert('完了');
});

//button(削除)タグ生成
const deleteButton = document.createElement('button');
deleteButton.innerText="削除";
deleteButton.addEventListener('click',()=>{
//押された削除ボタンの親タグ（div）
});
//divタグに子要素の各要素を設定
div.appendChild(li);
li.append(completeButton);
li.append(deleteButton);



document.getElementById('incomplete-list').appendChild(div)
};

document.getElementById('add-button').addEventListener('click',()=>onClickAdd());