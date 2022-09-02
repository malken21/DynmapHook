# DynmapHook

<br>
httpsでhtmlを公開した場合はDynmapがhttpのサーバーは表示できません httpsのサーバーは表示できます
<br>
<br>
httpでhtmlを公開した場合はDynmapがhttpのサーバーもhttpsのサーバーも表示できます

# 使い方
index.htmlを開いたときに表示するサーバーの設定
<br>
https://github.com/malken21/DynmapHook/blob/main/index.html#L19
<br>
<br>
一覧に表示するサーバーの設定
<br>
https://github.com/malken21/DynmapHook/blob/main/index.html#L25-L31
<br>
追加する場合は
```html
<br>
<label>
  <input type="radio" name="add" value="追加したいサーバーのDynmapのURL" onchange="Change();">追加したいサーバーの表示名
</label>
```
を追加してください
