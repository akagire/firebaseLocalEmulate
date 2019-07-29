### このフォルダの使い方について

必要な下記の2ファイルをおいてください。

#### firebaseAdminsdk.json (必須)

Firebase のダッシュボードの `設定` → `サービスアカウント` → `新しい秘密鍵を作成` からダウンロードしたJSONファイル。

#### appEngineDefaultServiceAccount.json（任意）

[ここを参考にして](https://firebase.google.com/docs/functions/local-emulator?hl=ja) 生成された `App Engine default service account` のキー。

このファイルを設定してもらうと、プロジェクトフォルダ直下で `yarn serve` するとローカルでFirebaseをエミュレートできます。
