<?php
$dummy = $_POST['dummy'];
if (is_null($dummy)){
  echo "何か記入してください";
}elseif (trim($dummy)==""){
  echo "空白です";
}else {
  echo "あなたは、\"" . $dummy . "\"と書きました";
}
?>