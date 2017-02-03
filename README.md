# vrchecker
This is a HTML to display a test pattern of focus, blur and viewing angle for VR Goggles.

スマートフォン用 VR ゴーグルのボケ具合、曇り、視野の広さなどを評価するためのテストパターン表示用HTMLです。


### Try here
http://www.ukaibutton.com/vr/vrchecker/
Check usage with the blog below.

使い方はブログを見てね。

### Details
Details is written in the blog below:

http://koteitan.hatenablog.com/entry/2016/12/04/050348

評価の顛末を上記ブログに書いています。

### Point
The unique point of that is the test pattern is always drawn with dot by dot graphics with the tag below:

ドットバイドットでテストパターンが表示されるところが凝ってあります。普通に書くと勝手に拡大されてボケボケになる。下記のタグを使ってるというだけですが。

`<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">`

