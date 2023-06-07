
let explanation = ["開始時，塑膠管中的彈珠顏色從上至下分別為「紅色、紅色、藍色、藍色、紅色」。將彈珠從上至下依序編號為1至5，其中紅色彈珠用R表示，藍色彈珠用B表示，則遊戲開始時，塑膠管內的彈珠編號由上至下為「R1、R2、B3、B4、R5」。Step 1: 從下方取出R4、R5，從上方加入一顆藍色，塑膠管中的彈珠顏色從上至下為 B6 R1 R2 B3 R4Step 2: 從下方取出B3、R2，從上方加入一顆紅色、一顆藍色、一顆紅色，塑膠管中的彈珠顏色從上至下為 R7 B6 R1 B8 R9Step 3: 從下方取出R1、B6，從上方加入一顆藍色，塑膠管中的彈珠顏色從上至下為 B10 R7 B8 R9Step 4: 從下方取出R9、B8，從上方加入一顆紅色、一顆藍色、一顆紅色，塑膠管中的彈珠顏色從上至下為 R10 B11 R12 B10Step 5: 從下方取出B10、R12，從上方加入一顆藍色，塑膠管中的彈珠顏色從上至下為 B13 R10 R11Step 6: 從下方取出R10、R11，從上方加入一顆藍色，塑膠管中的彈珠顏色從上至下為 B14 B13因為只剩下兩顆彈珠，所以遊戲結束。總共需要進行 6 次「取出＋加入」程式。"];



const Pretest = [
    { question: 1, imgsrc: "img/Pretest/E-2014_18-A.png", options: { A: ['abbbaabbccbaaaabbc'], B: ['aaaaccbbaacaaccccbbaabbc'], C: ['caaccccaaccccccacccc'], D: ['acacbcbcbcbcacacbcbcccccbcbcacbcbcc'] }},
    { question: 2, imgsrc: "img/Pretest/D-2014_1-B.png", options: { A: ['4'], B: ['5'], C: ['6'], D: ['7'] }},
    { question: 3, imgsrc: "img/Pretest/E-2015_4-A.png", options: { A: ['4-0'], B: ['5-0'], C: ['4-1'], D: ['3-2'] }},
    { question: 4, imgsrc: "img/Pretest/D-2014_27-D.png", options: { A: ['6 車次'], B: ['9 車次'], C: ['15 車次'], D: ['18 車次'] }},
];
const Test1 = [
    { question: 1, imgsrc: "img/Task1/1_宋1_E.png", options: { 
        A: ['4', "red", ''], 
        B: ['5', "green", "這是一個有趣的問題!\n我們可以用模擬的方式來解決這個問題，模擬每一次取出兩個彈珠的過程，並根據第一個彈珠的顏色進行相應的操作。\n以下是這個遊戲的模擬過程：\n1.紅色、紅色、藍色、藍色、紅色 (開始)\n2.紅色、紅色、藍色、紅色 (取出紅色、藍色，放入藍色)\n3.紅色、紅色、藍色、紅色、紅色 (取出藍色、紅色，放入紅色、藍色、紅色)\n4.紅色、藍色、紅色、紅色 (取出紅色、紅色，放入藍色)\n5.紅色、紅色、藍色 (取出藍色、紅色，放入紅色、藍色、紅色)\n6.紅色、藍色 (取出紅色、紅色，放入藍色)\n因為只剩下兩顆彈珠，所以遊戲結束。總共需要進行 5 次「取出＋加入」程式。"], 
        C: ['6', "yellow", "開始時，塑膠管中的彈珠顏色從上至下分別為「紅色、紅色、藍色、藍色、紅色」。將彈珠從上至下依序編號為1至5，其中紅色彈珠用R表示，藍色彈珠用B表示，則遊戲開始時，塑膠管內的彈珠編號由上至下為「R1、R2、B3、B4、R5」。\nStep 1: 從下方取出R4、R5，從上方加入一顆藍色，塑膠管中的彈珠顏色從上至下為 B6 R1 R2 B3 R4。\nStep 2: 從下方取出B3、R2，從上方加入一顆紅色、一顆藍色、一顆紅色，塑膠管中的彈珠顏色從上至下為 R7 B6 R1 B8 R9。\nStep 3: 從下方取出R1、B6，從上方加入一顆藍色，塑膠管中的彈珠顏色從上至下為 B10 R7 B8 R9。\nStep 4: 從下方取出R9、B8，從上方加入一顆紅色、一顆藍色、一顆紅色，塑膠管中的彈珠顏色從上至下為 R10 B11 R12 B10。\nStep 5: 從下方取出B10、R12，從上方加入一顆藍色，塑膠管中的彈珠顏色從上至下為 B13 R10 R11。\nStep 6: 從下方取出R10、R11，從上方加入一顆藍色，塑膠管中的彈珠顏色從上至下為 B14 B13。\n因為只剩下兩顆彈珠，所以遊戲結束。總共需要進行 6 次「取出＋加入」程式。"], 
        D: ['7', "red", ''] }, robot: "B" },
    { question: 2, imgsrc: "img/Task1/2_宋5_D.png", options: { 
        A: ['5', "yellow", "為了計算最少需要裁切幾根木頭，我們可以使用貪婪法 (Greedy algorithm)。我們先將木頭的長度由大到小排序，然後從最長的木頭開始選取，直到可以製作出所有的桌子為止。\n具體的做法如下：\n1.	將木頭的長度由大到小排序。\n2.	創建一個桌子計數器，初始化為0。\n3.	從最長的木頭開始選取，如果這根木頭可以用來製作桌腳，就選取這根木頭，然後將桌子計數器加1。\n4.	如果製作一張桌子所需的四根木腳都已經取到了，則將桌子計數器減1。\n5.	重複步驟3-4，直到可以製作出所有的桌子為止。\n得出最少需要裁切5根木頭才能完成8張桌子"], 
        B: ['6', "green", "為了求得最佳解，我們先列出幾個規則和事實，以便進行下一步計算：\n規則1：每張桌子都需要4支腳，如果庫存中同一種長度的木頭，就可以直接取出4支或4的倍數支木頭來製作桌子，直到這種長度的木頭庫存不足一張桌子為止。根據這個規則，只要有足夠的木頭，就可以製作一張高度為2、一張高度為6和一張高度為9的桌子。\n規則2：需要用32根木頭製作8張桌子，代表所有的木頭都必須用完，且木頭不能加長，只能被啃短。根據這個規則，最長的木頭長度為10，但只有3支，無法製作一張桌子，所以這3支木頭都必須被啃短。其他每種長度的木頭都有需要補足的數量，為了讓啃短的木頭數量最少，我們可以優先製作高度為4、5、7、8的桌子，因為這些桌子只缺少1支腳。此外，因為所有庫存都必須使用，所以長度為3的2支木頭也必須製作成一張桌子，這些高度為3、4、5、7、8的桌子優先製作，它們總共缺少6支桌腳。\n剩下長度為6、9和10的木頭暫時不會用來製作桌子，但這些木頭的庫存量為1+2+3=6，恰好可以補足之前缺少的6支桌腳。因此，答案是最少需要啃短6支木頭才能製作出8張桌子"], 
        C: ['8', "red", ''], 
        D: ['9', "red", ''] }, robot: "B" },
    { question: 3, imgsrc: "img/Task1/3_宋2_D.png", options: { 
        A: ['4', "yellow", "當您替換字串中的三個字母時，可以將任何一個字母替換成其他三個字母中的一個，因此有C(4,3)種替換方案，即4種字母中選擇3個進行替換。\n在替換後的字串中，最多會有4個一樣的字母連續排列在一起。以下是一個可以達到這個結果的替換方案：\n將原始字串中的三個B都替換成A，形成新的字串：AAAACDAACDACAABC在這個新字串中，有4個A連續排列在一起。"], 
        B: ['6', "yellow", "這道問題可以用暴力法求解，也就是嘗試所有可能的三個字母的組合，替換原字串中的對應字母，然後計算結果字串中最多的連續重複字母數量。\n接下來，我們可以嵌套三層迴圈，枚舉所有可能的三個字母的組合，並替換原字串中的對應字母。每次替換後，計算結果字串中最多的連續重複字母數量，並更新最大值。\n可以得到結果為 6。也就是說，最多會有 6 個一樣的字母會連續排在一起。例如，當我們把原字串中的 A、B、C 替換成 C、B、A 時，得到的結果字串為 CDCBDBCDDBCBDCD，其中有 6 個連續的 D。"], 
        C: ['7', "red", ''], 
        D: ['9', "red", ''] }, robot: "B" },
    { question: 4, imgsrc: "img/Task1/4_宋7_E.png", options: { 
        A: ['563547', "red", ''], 
        B: ['347565', "yellow", "小奧拿積木的規則如下：\n首先從積木塔的最上方開始，拿下一個積木。\n如果這是第一個拿下來的積木，則將它放在一邊（左邊或右邊）。\n如果已經有一些積木被拿下來並放在一邊了，則將這個拿下來的積木插入到已經放置的積木序列的最左側或最右側。\n重覆步驟 1-3，直到所有的積木都被拿下來並放置在積木序列中為止。\n根據上述規則，我們可以模擬拿積木的過程：\n首先，從最上面拿下積木 $7$，放在左側，積木序列為 $7$。\n接著，從最上面拿下積木 $4$，數字較數列最左的數字7小，將其插入到序列最左側，積木序列變成 $4,7$。\n然後，從最上面拿下積木 $5$，數字較數列最左的數字4大，將其插入到序列最右側，積木序列變成 $4,7,5$。\n接著，從最上面拿下積木 $3$，數字較數列最左的數字4小，將其插入到序列最左側，積木序列變成 $3,4,7,5$。\n然後，從最上面拿下積木 $6$，數字較數列最左的數字3大，將其插入到序列最右側，積木序列變成 $3,4,7,5,6$。\n最後，從最上面拿下積木 $5$，數字較數列最左的數字3大，將其插入到序列最左側，積木序列變成 $3,4,7,5,6,5$。"], 
        C: ['345567', "yellow", "首先我們考慮將積木塔的最下麵一層看作一個序列，即$7,4,5,3,6,5$，我們需要將這個序列排列成一個六位數。由於最終結果要求是最小的數，因此我們需要讓左邊的數盡可能小。所以我們考慮從左到右，依次將數從最小的開始選取。\n首先考慮第一位，$7,4,5,3,6,5$ 中最小的數是 $3$，因此第一位選 $3$。\n接著考慮第二位，剩下的數是 $7,4,5,6,5$，最小的數是 $4$，因此第二位選 $4$。\n接下來，我們需要將剩下的數繼續從小到大排序。剩下的數是 $7,5,6,5$，我們可以先選取最小的數 $5$ 放在第三位，然後剩下的數是 $7,6,5$，繼續選取最小的數 $5$ 放在第四位。\n剩下的數是 $7,6$，我們選取最小的數 $6$ 放在第五位，最後只剩下 $7$，我們將它放在第六位。因此，積木塔可能形成的最小數字是 $345567$。\n需要注意的是，雖然 $7$ 也是一個數，但是因為它只剩下一個，所以它只能放在最後一位。"], 
        D: ['354765', "red", ''] }, robot: "B" },
    { question: 5, imgsrc: "img/Task1/5_曹6_E.png", options: { 
        A: ['警方一定可以在訊問20人之內揪出小偷', "green", "警方可以使用二分搜尋的方法來最小化訊問的人數，因為問題的答案只有 藍鑽石 或 綠鑽石 兩種可能，所以警方可以從名單中選擇一半的人員，問他們關於鑽石的顏色，根據回答來決定下一步搜尋範圍。這樣每次都可以將名單縮小一半，直到找到犯人為止。因為每次都可以將範圍縮小一半，所以最多需要訊問 $\log_2 2000 \approx 11$ 次。"],
        B: ['訊問20人以內不保證能揪出小偷，但是訊問200人以內一定能揪出小偷', "red", ''], 
        C: ['警方至少要訊問200人、至多可能要訊問1999人', "yellow","警方可以將進入展示間的人按照一定的方式分組，例如將他們分為 10 組，每組 200 人，接著依次訊問每組的第一個人。如果第一個人說他看到的是藍鑽石，那麼這整組的人都可以排除；如果第一個人說他看到的是綠鑽石，那麼小偷一定在這組人當中。接著再將這組人分成 10 小組，每小組 20 人，逐一訊問每小組的第一個人。如果第一個人說他看到的是藍鑽石，那麼這小組的人都可以排除；如果第一個人說他看到的是綠鑽石，那麼小偷一定在這小組人當中。如此反覆進行，每次都可以將範圍縮小到原來的 1/10。當範圍縮小到 20 人以內時，警方只需要訊問這些人的顏色，就可以找到小偷。因此，警方至少要訊問 200 人，至多需要訊問 1999 人。"], 
        D: ['訊問的人數與運氣有關，如果運氣很差的話，需要訊問全部的人', "red", ''] }, robot: "A" },
    { question: 6, imgsrc: "img/Task1/6_曹5_E.png", options: { 
        A: ['31格', "yellow", "因為彩帶的循環節是由四個格子組成的，所以從剪下的那一端到最近的「黃色」格子的距離必須是 4 的倍數才能保持循環。因此，如果假設姊姊從剛好在兩個「黃色」格子中間的位置剪下彩帶，那麼剪下的長度就應該是 4n+3（其中n為自然數），因為要到達最近的「黃色」格子，需要加上 3 格。同理，從剪下的那一端到最近的「藍色」格子的距離也必須是 4 的倍數才能保持循環。"], 
        B: ['32格', "red", ''], 
        C: ['33格', "red", ''], 
        D: ['34格', "yellow", "原本的彩帶是由多個四格為一組的循環構成，其中每個循環的第1格和第4格顏色不同，而這個顏色的順序是「黃-紅-紅-藍」。如果姊姊從中間剪下一段，那麼剪下的長度必須是 4 的倍數才能保持循環，且從剪下的那一端到最近的「黃色」格子的距離也必須是 4 的倍數才能保持循環。同樣地，從剪下的那一端到最近的「藍色」格子的距離也必須是 4 的倍數才能保持循環。"]}, robot: "A" },
    {question:7, imgsrc:"img/Task1/7_曹1_M.png", options:{
        A:['瑟吉使用兩個火爐可以節省10分鐘的烹調時間', "red", ''], 
        B:['瑟吉使用兩個火爐可以節省30分鐘的烹調時間', "yellow", "使用兩個火爐時，瑟吉可以同時進行步驟一和二，這樣只能節省10分鐘的烹調時間。"], 
        C:['瑟吉使用三個火爐可以節省40分鐘的烹調時間', "red", ''], 
        D:['瑟吉使用四個火爐可以節省50分鐘的烹調時間', "yellow", "使用四個火爐時，瑟吉仍然只能同時進行步驟一、二和四，無法同時進行所有步驟，因此最多只能省下40分鐘的烹調時間。"]}, robot:"D"},
    {question:8, imgsrc:"img/Task1/8_曹4_D.png", options:{
        A:['1', "yellow", "若遊戲開始時有15顆石頭，則根據歷史記錄的結果，第一個玩家撿走一顆石頭是必要的。這樣，接下來不管海狸撿走幾顆石頭，你都能保證每回合總是有偶數顆石頭留下來，進而使你獲勝。"], 
        B:['2', "red", ''], 
        C:['3', "green", "如果你在第一回合撿走3顆石頭，剩下12顆石頭。無論海狸接下來如何撿走石頭，你都可以繼續採取同樣的策略，在每回合中都撿走剩下石頭數量的差值（4減去對手的石頭數量）。這樣一來，你可以確保在最後一次撿走石頭的情況下，只剩下1顆石頭，而這時候海狸將無法再撿走任何石頭，你就獲勝了。"], 
        D:['沒有任何方法能保證獲勝',  "red", '']}, robot:"C"}
];
const Test2 = [
    { question: 1, imgsrc: "img/Task2/1_宋3_E.png", options: { 
        A: ['12', "red", ''], 
        B: ['13', "yellow", "將SRRTSSSSTSTSTLLLL代入系統中，可以得到以下轉換過程：\n●SR：SR1\n●R：R2\n●T：T\n●SSS：S3\n●TSTST：TS3\n●LLLL：L4。\n因此，最短的輸出字串為：SR1R2TS3TS3L4，長度為13。"], 
        C: ['16', "yellow", "將SRRTSSSSTSTSTLLLL代入系統中，可以得到以下轉換過程：\n●SRR：SR2\n●T：T\n●SSS：S3\n●TSTST：(TS)3\n●LLLL：L4。\n因此，最短的輸出字串為：SR2T(S3(TS)3)L4，長度為16。"], 
        D: ['15', "red", ''] }, robot: "B" },
    { question: 2, imgsrc: "img/Task2/2_曹8_D.png", options: { 
        A: ['1.設定射擊火力為0\n2.重複以下指令直到擊中松樹為止\n2.1將目前的射擊火力加大一單位\n2.2發射松果', "red", ''], 
        B: ['1.設定射擊火力為最大值\n2.重複以下指令直到擊中松樹為止\n2.1發射松果\n2.2將目前的射擊火力減小一單位', "red", ''], 
        C: ['1.設定射擊火力為任一隨機值\n2.重複以下指令直到擊中松樹為止\n2.1將目前的射擊火力加大一單位\n2.2發射松果', "green", "因為設定射擊火力為任一隨機值，可能會設定到非常小或非常大的值，導致射擊火力不足或太大，無法擊中松樹。而且射擊火力加大一單位的指令也不保證每次加大都會使射擊火力更接近擊中松樹的適當值。"], 
        D: ['1.設定射擊火力為0\n2. 重複以下指令直到擊中松樹或松果飛越松樹為止\n2.1將目前的射擊火力加大五單位\n2.2發射松果\n3. 若上次射擊松果飛越松樹，重複以下指令直到擊中松樹為止\n3.1將目前的射擊火力減小一單位\n3.2發射松果', "yellow", "(D) 的射擊程序無法保證擊中松樹，因為它會先增加射擊火力五單位，如果此次射擊將松果飛越了松樹，就會減少火力再重新射擊。但是如果松樹和松果之間的距離很遠，即使增加五單位的火力也無法越過這段距離，因此會一直增加火力，直到超過射擊範圍。所以這個射擊程序可能會無限迴圈，無法擊中松樹。"] }, robot: "C" },
    { question: 3, imgsrc: "img/Task2/3_曹2_M.png", options: { 
        A: ['任一偶數', "red", ''], 
        B: ['2的次方數', "yellow", "如果X是2的幂，即X = 2^n，其中n是非負整數，則在第一次迭代中，它將一直被2整除，直到變為1。因此，程序將在一定的迭代次數內終止。\n我們可以通過數學證明來證明這一點。在第一次迭代中，我們將X除以2，得到X/2 = 2^(n-1)。如果繼續這樣做，我們會得到：\n第二次迭代：X/4 = 2^(n-2)、\n第三次迭代：X/8 = 2^(n-3)\n...\n第k次迭代：X/(2^k) = 2^(n-k)，\n在第k次迭代中，如果X變為1，則有：2^(n-k) = 1，\n這意味著n - k = 0，即k = n。因此，程序將在n次迭代後終止。由於X是2的幂，因此n是非負整數，程序將在有限次迭代後終止。\n因此，如果X是2的幂，則程序將終止。"], 
        C: ['無論初始值為何，此程序永遠無法停止', "yellow", "無論初始值為何，此程序永遠無法停止。\n在這個程序中，如果初始值為偶數，則在第一次迭代時它將被除以2，結果為一個更小的偶數。重複這個過程，最終會得到一個等於1的偶數，這將在下一次迭代時停止程序。但是，如果初始值為奇數，則在第一次迭代時它將乘以2再加1，結果為一個更大的奇數。如果我們以這種方式繼續進行下去，我們將得到一個無限遞增的序列，它永遠不會達到1，因此程序永遠不會停止。"], 
        D: ['任意數', "red", ''] }, robot: "B" },
    { question: 4, imgsrc: "img/Task2/4_宋6_D.png", options: { 
        A: ['取走1塊白石頭', "yellow", "這個問題可以通過反推來解決。如果葛麗特想要贏得遊戲，她應該確保在她的回合之後，無論漢賽爾怎麼取石頭，她都可以取走最後一塊石頭。因此，我們需要找到一個策略，讓葛麗特可以在自己的回合之後，每次都讓石頭的總數減去4的倍數。\n首先，如果葛麗特在第一回合取走1塊白石頭，那麼漢賽爾可以選擇取走2塊黑石頭。接著，葛麗特可以取走3塊白石頭，這樣就剩下4塊白石頭和2塊黑石頭了。此時，不管漢賽爾取走幾塊石頭，葛麗特都可以取走最後一塊石頭，贏得遊戲。"], 
        B: ['取走2塊黑石頭', "red", ''], 
        C: ['取走3塊白石頭', "yellow", "這個問題可以通過反推來解決。如果葛麗特想要贏得遊戲，她應該確保在她的回合之後，確保兩種顏色的石頭數量皆比可以取走的數量多1。\n因此如果葛麗特在第一回合取走3塊白石頭，則只剩下4塊白石頭以及3塊黑石頭，無論漢賽爾只能選擇取走多少塊黑石頭或白石頭，然後葛麗特可以取走剩下的石頭，這樣就可以確保葛麗特就會贏得遊戲。 "], 
        D: ['不論取走幾塊石頭都可以', "red", ''] }, robot: "C" },
    { question: 5, imgsrc: "img/Task2/5_宋8_D.png", options: { 
        A: ['87', "red", ''], 
        B: ['85', "yellow", "首先從100公尺的水管中切下一段長度為11的水管，剩餘長度為89。接著，將長度為11的水管切成長度為3和長度為8的兩段。再將長度為8的水管切成長度為4和長度為4的兩段。再將89公尺的水管切下一段長度為4的水管，剩餘長度為85。最後，從長度為4的水管中切下一段長度為3的水管，並將這段水管接在長度為3的水管上，得到長度為13的水管，此時剩餘長度為85，因此85公尺為正確解答。"], 
        C: ['82', "yellow", "首先，我們可以用4和7公尺的水管來拼湊出所有小於等於13公尺的水管：\n●4公尺：4、8、12\n●7公尺：7、11。\n因此，我們可以發現13公尺的水管最多只能剩下11公尺的水管（即用一個7公尺的水管和一個4公尺的水管拼湊出11公尺的水管）。\n如果原本有一條100公尺的水管，我們用上述方法拼湊出一個13公尺的水管之後，剩餘的水管長度為100-11=89公尺。\n但是題目要求盡可能保留100公尺的水管長度，因此我們可以嘗試用兩條7公尺的水管來拼湊出14公尺的水管，然後用這個14公尺的水管和一個4公尺的水管拼湊出18公尺的水管。然後我們可以用這個18公尺的水管拼湊出一個13公尺的水管，剩餘的水管長度為100-18=82公尺。\n因此，最多剩餘82公尺的水管長度，是正確的答案。"], 
        D: ['81', "red", ''] }, robot: "B" },
    { question: 6, imgsrc: "img/Task2/6_宋4_E.png", options: { 
        A: ['2', "yellow", "因為這個問題的規模非常小，我們可以使用暴力法來解決。我們可以列出所有可能的路徑，然後找到其中最短的一條路徑，使得它包含所有的節點。這樣做的時間複雜度為 O(n!)，其中 n 是節點的數量，因此它只適用於非常小的問題。\n在這個問題中，有六個節點，因此我們可以列出所有可能的路徑，並找到其中最短的路徑。\n首先，我們可以看到連續技中有兩個動作（高空重擊和站立）同時出現在多個連續技中，因此這兩個動作必須在強森所學習的每個連續技中都出現。因此，我們可以將這兩個動作放在每個連續技的開頭或結尾。\n接下來，我們可以看到其他的動作只出現在一個或兩個連續技中。我們可以先嘗試使用這些動作來構建單個連續技，如果無法覆蓋所有的動作，我們再嘗試將不重疊的連續技組合起來。\n首先，我們可以使用金勾臂，因為它是唯一一個包含四個動作的連續技，可以覆蓋所有的動作。因此，我們只需要再找出一個包含金勾臂的連續技即可。\n我們發現金勾臂包含站立和奔跑這兩個動作，而這兩個動作又在飛身撲和助跑式飛身壓這兩個連續技中出現，因此，我們可以將金勾臂和這兩個連續技組合起來，形成一個包含所有六個動作的連續技序列：\n站立(P2)、奔跑(P3)、高空重擊(P6)、靠著擂臺邊界繩(P4)、金勾臂、飛身撲、高空重擊、助跑式飛身壓、高空重擊。\n因此，強森只需要學會兩個連續技即可覆蓋所有的動作。"], 
        B: ['3', "green", "這是一個集合覆蓋問題，可使用近似演算法如貪心演算法解決。\n貪心演算法的基本思想是每次選擇最優的選項，直到達到目標。對於這個問題，每個連續技都可以看作一個集合，其中包含了可以使用的動作。我們需要選擇最少的集合，以便每個動作至少被選擇一次。\n具體來說，我們可以逐步選擇連續技，每次選擇包含最多未被選擇的動作的連續技。直到每個動作都至少被選擇一次為止。\n以下是使用貪心演算法解決這個問題的步驟：\n1.創建一個空的連續技集合，名為 chosen_acts，用來記錄已經選擇的連續技。\n2.創建一個動作集合，名為 uncovered_acts，初始為所有動作，用來記錄還未被覆蓋的動作。\n3.在所有連續技中，選擇一個可以覆蓋最多未被覆蓋動作的連續技，加入到 chosen_acts 集合中。\n4.從 uncovered_acts 中刪除已經被覆蓋的動作。\n5.重複步驟 3 和 4 直到所有動作都被覆蓋。\n透過貪婪演算法，我們可以快速找到最少需要幾個連續技才能讓所有動作都被覆蓋。\n這個題目的答案是最少需要學會三種連續技才能覆蓋所有動作，而且其中一種可能的選擇是 A2、A4、A5。"], 
        C: ['4', "red", ''], 
        D: ['5', "red", ''] }, robot: "B" },
    { question: 7, imgsrc: "img/Task2/7_曹3_D.png", options: { 
        A: ['196', "green", "如果您買2袋8支裝、2袋2支裝和1袋1支裝的棒棒糖，則總共可以得到：\n2袋8支裝=16支、\n2袋2支裝=4支、\n1袋1支裝=1 支，\n總共可以得到16+4+1=21 支棒棒糖。\n其中，2袋8支裝的價格為72元x2=144元，2袋2支裝的價格為20元x2=40 元，1袋1支裝的價格為12元。\n總共需要的海狸幣為144+40+12=196 元。"], 
        B: ['206', "yellow", "如果可以將多出來的棒棒糖分送出去，買21支棒棒糖最少需要的海狸幣為：\n首先可以買一箱16支裝的棒棒糖，價格為150元，剩下的需要買5支棒棒糖。接下來可以買一袋4支裝的棒棒糖，價格為44元，剩下的需要買1支棒棒糖。最後再買一支單支售價為12元的棒棒糖，總共需要的海狸幣為：\n150 + 44 + 12 = 206元。\n因此，在可以將多出來的棒棒糖分送出去的前提下，買21支棒棒糖最少需要206元。"], 
        C: ['216', "red", ''], 
        D: ['226', "red", ''] }, robot: "A" },
    { question: 8, imgsrc: "img/Task2/8_曹7_E.png", options: { 
        A: ['小萱戴哥奇哥小蘿小愛', "red", ''], 
        B: ['小萱奇哥小愛戴哥小蘿', "green", "娜娜接下來與奇哥聊天。根據謎題，娜娜必須先與小萱聊天後才能與奇哥聊天，因此奇哥的聊天位置必須在小萱之後。\n娜娜再與小愛聊天。根據謎題，娜娜必須先與小愛聊天後才能與戴哥聊天，因此小愛的聊天位置必須在戴哥之前，也就是奇哥之後。\n娜娜再與戴哥聊天。根據謎題，娜娜必須先與戴哥及奇哥聊天後才能與小蘿聊天，因此戴哥的聊天位置必須在奇哥之後，也就是小愛之前。\n娜娜最後與奇哥聊天。根據謎題，娜娜必須先與小萱聊天後才能與奇哥聊天，因此我們將小萱放在最後一個與娜娜聊天的朋友，也就是與奇哥聊天之後。"], 
        C: ['小萱小愛戴哥奇哥小蘿', "yellow", "因為娜娜任何時候都可跟小萱聊天，因此娜娜可以先跟小萱聊天。\n娜娜必須先與小愛聊天後才能與戴哥聊天，因此娜娜接下來要跟小愛聊天，再與戴哥聊天。\n娜娜必須先與小萱聊天後才能與奇哥聊天，因此娜娜接下來要跟小萱聊天，再與奇哥聊天。\n娜娜必須先與戴哥及奇哥聊天後才能與小蘿聊天，因此娜娜接下來要先與戴哥及奇哥聊天，再與小蘿聊天。\n最後，娜娜必須先與奇哥及小萱聊天後才能與小愛聊天，因此娜娜最後與小愛聊天。"], 
        D: ['小萱小愛奇哥小蘿戴哥', "red", ''] }, robot: "B" },
];
const questions_set = {
    "pretest": Pretest,
    "test1": Test1,
    "test2": Test2
};
const questions = questions_set[document.title];
const has_robot = "robot" in questions[0];

player_answers = [];

function start() {
    start_time = window.performance.now();
    countdown_timer = setInterval(countdown, 1);
    button.addEventListener("click", click);
    show_question(index);

    document.getElementById("index_page").style.display = "none";
    document.getElementById("test_page").style.display = "";
    document.getElementById("ending_page").style.display = "none";
}

function show_question() {
    q = questions[index];
    // [LOG] QUESTION 

    content += `${window.performance.now()} QUESTION ${q["question"]} \n`;
    console.log(`${window.performance.now()} QUESTION ${q["question"]}`);

    document.getElementById("question").innerText = ` 第 ${q["question"]} 題 `;
    document.getElementById("img").src = q["imgsrc"];
    document.getElementById("label_input_14_1").innerHTML = q["options"]["A"][0];
    document.getElementById("label_input_14_2").innerHTML = q["options"]["B"][0];
    document.getElementById("label_input_14_3").innerHTML = q["options"]["C"][0];
    document.getElementById("label_input_14_4").innerHTML = q["options"]["D"][0];
    if (document.title != "pretest") {
        if (q["options"]["A"][2] != '') document.getElementById("ex1").innerText = q["options"]["A"][2];
        if (q["options"]["B"][2] != '') document.getElementById("ex2").innerText = q["options"]["B"][2];
        if (q["options"]["C"][2] != '') document.getElementById("ex3").innerText = q["options"]["C"][2];
        if (q["options"]["D"][2] != '') document.getElementById("ex4").innerText = q["options"]["D"][2];    
    }


    if (has_robot) {
        // document.getElementById("robot").innerHTML = `<div class="row" style="margin: 10px;">
        // <img src="img/robot.png" width="50" height="50">
        //     <div class="msg alert alert-warning" id="msg_id" role="alert"> 機器人認為答案是 ${questions[index]["options"][questions[index]["robot"]]}</div></div>`;

        button.classList.remove("btn-success");
        button.classList.add("btn-secondary");
        button.value = "選擇答案";
        document.getElementById("robot").style.display = 'none';

    } else {
        button.value = "送出答案";
    }

};

function click() {
    radio_checked = document.querySelector('input[name="radio"]:checked');
    if (radio_checked == null) { return }
    if (button.value == "選擇答案") {
        // [LOG] CONFIRM
        content += `${window.performance.now()} CONFIRM ${radio_checked.value} \n`
        console.log(`${window.performance.now()} CONFIRM ${radio_checked.value}`);

        // 加顏色
        option1.classList.add(q["options"]['A'][1]);
        option2.classList.add(q["options"]['B'][1]);
        option3.classList.add(q["options"]['C'][1]);
        option4.classList.add(q["options"]['D'][1]);

        // Show toggle
        if (q["options"]['A'][1] == "green" || q["options"]['A'][1] == "yellow") {
            $("#option1 button").first().show();
        }
        if (q["options"]['B'][1] == "green" || q["options"]['B'][1] == "yellow") {
            $("#option2 button").first().show();
        }
        if (q["options"]['C'][1] == "green" || q["options"]['C'][1] == "yellow") {
            $("#option3 button").first().show();
        }
        if (q["options"]['D'][1] == "green" || q["options"]['D'][1] == "yellow") {
            $("#option4 button").first().show();
        }

        button.classList.remove("btn-secondary");
        button.classList.add("btn-success");
        button.value = "送出答案";
        document.getElementById("robot").style = "";
        return
    }
    // [LOG] SUBMIT
    content += `${window.performance.now()} SUBMIT ${radio_checked.value} \n`
    console.log(`${window.performance.now()} SUBMIT ${radio_checked.value}`);

    is_correct = radio_checked.value == q["robot"]
    player_answers.push(is_correct);
    console.log(`ISCORRECT ${is_correct} ${player_answers.filter((value) => value).length}`);

    // 移除顏色
    if (document.title != "pretest") {
        option1.classList.remove(q["options"]['A'][1]);
        option2.classList.remove(q["options"]['B'][1]);
        option3.classList.remove(q["options"]['C'][1]);
        option4.classList.remove(q["options"]['D'][1]);
    }

    // Hide toggle
    $("#toggle1").hide();
    $("#ex1").hide();
    $("#re1").hide();
    $("#toggle2").hide();
    $("#ex2").hide();
    $("#re2").hide();
    $("#toggle3").hide();
    $("#ex3").hide();
    $("#re3").hide();
    $("#toggle4").hide();
    $("#ex4").hide();
    $("#re4").hide();

    $("#scales1").prop('checked', false);
    $("#scales2").prop('checked', false);
    $("#scales3").prop('checked', false);
    $("#scales4").prop('checked', false);

    index += 1;
    if (index == questions.length) { return ending(); }
    if (has_robot) {
        button.classList.remove("btn-success");
        button.classList.add("btn-secondary");
        button.value = "選擇答案";
        document.getElementById("robot").style.display = "none";
    }
    radio_checked.checked = false;
    show_question();
    return
}

function toggle(ex_id, option) {
    // [LOG] TOGGLED
    content += `${window.performance.now()} TOGGLED ${option}\n`
    console.log(`${window.performance.now()} TOGGLED ${option}`);

    $(ex_id).slideToggle()
}

function countdown() {
    count = time - (window.performance.now() - start_time);
    if (count <= 0) {
        ending();
        clearInterval(countdown_timer);
    }
    sec = (count / 1000) % 60;
    min = (count / 1000 - sec) / 60;
    timer.innerText = `${min}:${sec < 10 ? "0" : ""}${sec | 0}`;
}

function ending() {
    // [LOG] FINISHED
    content += `${window.performance.now()} FINISHED \n`
    console.log(`${window.performance.now()} FINISHED`);

    // [LOG FILE] 
    logFile();

    console.log(player_answers);

    document.getElementById("index_page").style.display = "none";
    document.getElementById("test_page").style.display = "none";
    document.getElementById("ending_page").style.display = "";
}

function logFile() {
    const blob = new Blob([content], { type: 'plain/text' });
    const fileUrl = URL.createObjectURL(blob);
    current = new Date();
    filename = `${(current.getMonth() + 1 < 10) ? "0" : ""}${current.getMonth() + 1}${(current.getDate() < 10) ? "0" : ""}${current.getDate()}-${(current.getHours() < 10) ? "0" : ""}${current.getHours()}${(current.getMinutes() < 10) ? "0" : ""}${current.getMinutes()}-${document.title}.txt`;

    const element = document.createElement('a');
    element.setAttribute('href', fileUrl);
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
};

time = 1800 * 1000;
if (document.title == "pretest") time = 900 * 1000;
let button = document.getElementById("submit");
let timer = document.getElementById("timer");
let index = 0;
let content = "";
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");

$('#toggle1').on('click', () => { toggle('#ex1', "A") })
$('#toggle1').on('click', () => { $('#re1').slideToggle() })
$('#toggle2').on('click', () => { toggle('#ex2', "B") })
$('#toggle2').on('click', () => { $('#re2').slideToggle() })
$('#toggle3').on('click', () => { toggle('#ex3', "C") })
$('#toggle3').on('click', () => { $('#re3').slideToggle() })
$('#toggle4').on('click', () => { toggle('#ex4', "D") })
$('#toggle4').on('click', () => { $('#re4').slideToggle() })

$('#scales1').on('click', () => {
    // [LOG] REPORT
    content += `${window.performance.now()} REPORT A\n`
    console.log(`${window.performance.now()} REPORT A`);
})
$('#scales2').on('click', () => {
    // [LOG] REPORT
    content += `${window.performance.now()} REPORT B\n`
    console.log(`${window.performance.now()} REPORT B`);
})
$('#scales3').on('click', () => {
    // [LOG] REPORT
    content += `${window.performance.now()} REPORT C\n`
    console.log(`${window.performance.now()} REPORT C`);
})
$('#scales4').on('click', () => {
    // [LOG] REPORT
    content += `${window.performance.now()} REPORT D\n`
    console.log(`${window.performance.now()} REPORT D`);
})
$("#form").on('click', () => {
    $("#correct").text(`答對率：${player_answers.filter((value) => value).length}/8`);
    window.open("https://forms.gle/2hcGT1KPggo8pyBA8", '_blank')
})

document.getElementById("start").addEventListener("click", start);