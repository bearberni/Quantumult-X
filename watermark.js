let body = $response.body || "";

// 示例：把 oldText 替换成 newText
const oldText = ',n(o,"dark"==t.value?"#444444":"#E8E8E8")';
const newText = "";

if (body.includes(oldText)) {
  body = body.replace(oldText, newText);
  console.log("replace success");
} else {
  console.log("target snippet not found");
}

$done({ body });
