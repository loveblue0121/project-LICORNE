# LICORNE

#### 此專案為多人協作專案，本人負責區塊為「首頁 Header 元件」及「課程體驗」頁面功能製作

**此專案為資策會 MFEE16 結訓期末專案，
專案內使用之圖片、文字內容如有侵權，請來信：loveblue0121@gmail.com告知**

### 首頁Header元件:
- 使用Bootstrap以及media screen製作RWD
- 使用React NavLink 將選單上active的項目套用指定的CSS樣式

![Screenshot 2021-08-31 193912](https://user-images.githubusercontent.com/83852316/131496123-3c05e5be-0d26-4180-80e5-a6cbb7ffec37.png)


### 課程體驗頁面功能:

- 表單送出：將填寫資料存入資料庫

![Screenshot 2021-08-31 194041 (2)](https://user-images.githubusercontent.com/83852316/131497799-96d89b70-1509-4586-bea6-0e02e91bfe26.png)


- 連動下拉式選單：依照選擇不同方案呈現不同的時間、人數與價格

#### 選擇半日體驗時:

![Screenshot 2021-08-31 194652](https://user-images.githubusercontent.com/83852316/131497095-7bdc82bc-ecab-455c-aaba-fadd9168d562.png)

可看到時段為兩個，人數價錢為半日的價錢

#### 改為選擇一日體驗時:

![Screenshot 2021-08-31 194918](https://user-images.githubusercontent.com/83852316/131497361-f71d0a0d-36aa-4575-a8d5-87fdcea33bee.png)

可以很明顯的發現，時段以及人數價錢已經更動為一日方案的價格

- Google Map API：使用google map API，透過地圖呈現店點、以及選擇店鋪

#### 初始畫面
點選表單中的選擇店鋪進入畫面後，首先看到的是目前使用者的位置顯示在地圖上
左邊清單預設是顯示總店的資訊


![map1](https://user-images.githubusercontent.com/83852316/132485611-192a08dd-ce34-4e15-bd24-c3afe612915a.png)


不清楚附近有無分店的話，可以按下「顯示鄰近店鋪」來查看附近有沒有鄰近分店
### 顯示鄰近店鋪 (附近沒有鄰近店鋪的情況下)

![map2](https://user-images.githubusercontent.com/83852316/132486164-5a945d04-c036-4003-ad0d-e64eab47ed73.png)


### 顯示鄰近店鋪 (附近有鄰近店鋪的情況)

![map3](https://user-images.githubusercontent.com/83852316/132487942-2672cf5c-2e96-4f2e-b291-4d1b64a1594b.png)


#### 搜尋店鋪
也可使用關鍵字搜尋店鋪
可以看到左側清單顯示的是搜尋後的結果
![mapSearch](https://user-images.githubusercontent.com/83852316/132488750-72371491-e9f9-4a4c-bbb2-1df060602084.png)

