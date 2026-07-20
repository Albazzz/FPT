# PRM392 - SP26 - FE - RE — Đáp án & Giải thích

- Môn: **PRM392**
- Nguồn: https://fuexam.me/threads/prm392-sp26-fe-re.214/
- Tổng số câu: **60**

> Mỗi câu có: lựa chọn · **đáp án** · **giải thích tiếng Việt**.

---

## Câu 1 (Chọn 1)

How do you create a notification channel in Android?

- **A.** By calling the createNotificationChannel() method on the NotificationManager class only (without creating a channel object).
- **B.** By constructing a NotificationChannel object and passing it to the createNotificationChannel() method on the NotificationManager class. ✅
- **C.** By adding a <notification-channel> tag in the AndroidManifest.xml file.
- **D.** By setting a channel attribute in the <notification> tag in the layout XML file.

**Đáp án: B**

**Giải thích:** Từ Android 8.0+ phải tạo NotificationChannel (id, name, importance) rồi gọi NotificationManager.createNotificationChannel(channel). Không khai báo channel trong layout/manifest.

---

## Câu 2 (Chọn 1)

What is the importance of notification channels in Android?

- **A.** Notification channels allow users to manage and control notification behavior for each category of notifications. ✅
- **B.** Notification channels are used to define the layout of notification cards.
- **C.** Notification channels determine the priority of notifications only once and cannot be managed by users.
- **D.** Notification channels handle the delivery of notifications to the device.

**Đáp án: A**

**Giải thích:** Channel cho user bật/tắt, đổi importance, âm thanh… theo từng nhóm notification. Layout notification không do channel định nghĩa.

---

## Câu 3 (Chọn 1)

What is a Content URI and what is its structure?

- **A.** A path to a webpage or file, structured as file:// or http://.
- **B.** A URI identifying data in a ContentProvider, typically structured as content://authority/path[/id]. ✅
- **C.** A path to the internal database, accessible only by the originating application.
- **D.** A path to a resource on the server, used to call APIs.

**Đáp án: B**

**Giải thích:** Content URI trỏ tới dữ liệu qua ContentProvider, dạng content://authority/path. Client dùng ContentResolver với URI này.

---

## Câu 4 (Chọn 1)

According to the "SOCKET API" diagram, what is the order of the methods called to establish a connection and start data exchange from the server?

- **A.** socket() → connect() → read() → write() → close()
- **B.** socket() → bind() → listen() → accept() → write()/read() → close() ✅
- **C.** socket() → bind() → listen() → read() → write() → close()
- **D.** socket() → accept() → connect() → write() → read() → close()

**Đáp án: B**

**Giải thích:** Server TCP: tạo socket → bind địa chỉ/port → listen → accept client → trao đổi read/write → close. connect() là phía client.

---

## Câu 5 (Chọn 1)

What does the accept() method do in socket programming?

- **A.** It initiates a connection to another socket.
- **B.** It passively waits for a connection from a client. ✅
- **C.** It sends data to a connected socket.
- **D.** It reads data from a connected socket.

**Đáp án: B**

**Giải thích:** accept() (server) chặn/chờ client kết nối, trả về socket mới để giao tiếp với client đó.

---

## Câu 6 (Chọn 1)

Which method is used by a client socket to initiate a connection to a server at a specific IP address and port?

- **A.** bind()
- **B.** listen()
- **C.** connect() ✅
- **D.** accept()

**Đáp án: C**

**Giải thích:** Client gọi connect(IP, port) để chủ động kết nối tới server. bind/listen/accept thuộc phía server.

---

## Câu 7 (Chọn 1)

What attribute sets the padding of the start of the view, in pixels (RTL-friendly alternative to paddingLeft)?

- **A.** android:padding
- **B.** android:paddingTop
- **C.** android:paddingStart ✅
- **D.** android:paddingLeft
- **E.** android:paddingRight
- **F.** android:paddingEnd

**Đáp án: C**

**Giải thích:** paddingStart là cạnh bắt đầu theo hướng layout (LTR = trái, RTL = phải), thay cho paddingLeft khi cần hỗ trợ RTL.

---

## Câu 8 (Chọn 1)

Given a LinearLayout with vertical orientation, how would adding android:layout_weight="1" to a TextView affect its display?

- **A.** It fills the entire layout vertically by itself always.
- **B.** It makes the TextView disappear.
- **C.** It assigns proportional remaining space to the TextView alongside other components that also have weight. ✅
- **D.** It changes the orientation to horizontal.

**Đáp án: C**

**Giải thích:** layout_weight phân bổ khoảng trống còn lại theo tỉ lệ weight giữa các view con (cần height/width = 0dp theo chiều weight).

---

## Câu 9 (Chọn 1)

You want to track every text change in an EditText in real time. Which listener should you use?

- **A.** setOnEditorActionListener
- **B.** addTextChangedListener ✅
- **C.** setOnFocusChangeListener
- **D.** setOnKeyListener

**Đáp án: B**

**Giải thích:** TextWatcher (addTextChangedListener) bắt before/on/after text changed theo thời gian thực. EditorAction chỉ khi bấm action IME.

---

## Câu 10 (Chọn 2)

Which statements are correct using Chains in ConstraintLayout? (Choose 2 correct answers)

- **A.** Align a chain of Views in one of two directions (horizontal or vertical). ✅
- **B.** Distribute space evenly (or by style) between Views in a chain. ✅
- **C.** Connect Views to their parent only (chains are unrelated to sibling links).
- **D.** Create a linear layout (chains replace LinearLayout entirely as a different ViewGroup).

**Đáp án: A, B**

**Giải thích:** Chain trong ConstraintLayout: liên kết view theo 1 chiều và phân phối khoảng trống (spread, packed, weighted…). Không phải ViewGroup mới thay LinearLayout.

---

## Câu 11 (Chọn 1)

Considering: Button myButton = (Button) findViewById(R.id.my_button); what data type does findViewById(R.id.my_button) return?

- **A.** View ✅
- **B.** Object
- **C.** Button
- **D.** R.id

**Đáp án: A**

**Giải thích:** findViewById trả về View (API cũ) hoặc generic T extends View; code cast sang Button. Kiểu trả về gốc là View, không phải Button cho đến khi cast.

---

## Câu 12 (Chọn 1)

You need to display a settings screen with multiple options that allow users to change app preferences. Which Fragment subclass is most appropriate?

- **A.** DialogFragment
- **B.** ListFragment
- **C.** PreferenceFragment ✅
- **D.** Fragment

**Đáp án: C**

**Giải thích:** PreferenceFragment / PreferenceFragmentCompat chuyên dựng màn Settings từ PreferenceScreen XML.

---

## Câu 13 (Chọn 1)

Which SQL command is used to retrieve data from a database table?

- **A.** INSERT
- **B.** UPDATE
- **C.** DELETE
- **D.** SELECT ✅

**Đáp án: D**

**Giải thích:** SELECT truy vấn/lấy dữ liệu. INSERT thêm, UPDATE sửa, DELETE xóa.

---

## Câu 14 (Chọn 1)

What is the purpose of SQLite in Android?

- **A.** To send push notifications
- **B.** To store structured data locally in a lightweight database ✅
- **C.** To manage user preferences
- **D.** To build UI layouts

**Đáp án: B**

**Giải thích:** SQLite là CSDL quan hệ nhẹ nhúng trong Android, lưu structured data local. Preferences dùng SharedPreferences.

---

## Câu 15 (Chọn 1)

What is the first step in the workflow for handling Android permissions?

- **A.** Request the permission.
- **B.** Design your app UX to be self-explanatory.
- **C.** Declare the permission in your app's manifest file. ✅
- **D.** Wait for the user to request a specific action.

**Đáp án: C**

**Giải thích:** Bước đầu: khai báo <uses-permission> trong AndroidManifest. Sau đó (runtime) mới request nếu là dangerous permission.

---

## Câu 16 (Chọn 1)

Among the listed permission groups, which one is considered "dangerous" and why?

- **A.** INTERNET, because it allows the application to access the network.
- **B.** CAMERA, because it allows the application to access the camera and may capture images without the user's knowledge. ✅
- **C.** VIBRATE, because it causes vibration on the device.
- **D.** SET_WALLPAPER, because it can change the user interface.

**Đáp án: B**

**Giải thích:** CAMERA thuộc dangerous permission (cần runtime request). INTERNET/VIBRATE/SET_WALLPAPER là normal permissions.

---

## Câu 17 (Chọn 1)

Which of the following is the correct way to add access permission to your application?

- **A.** Add a <uses-permission> tag as a child of the <manifest> tag in AndroidManifest.xml. ✅
- **B.** Add an <add-permission> tag as a child of the <manifest> tag in AndroidManifest.xml.
- **C.** Add a <permission> tag only inside an Activity class.
- **D.** Add a <permission> tag as a child of the <application> tag in AndroidManifest.xml.

**Đáp án: A**

**Giải thích:** Dùng <uses-permission android:name="..." /> là con trực tiếp của <manifest>. <permission> dùng để định nghĩa permission custom, không phải xin quyền dùng API hệ thống.

---

## Câu 18 (Chọn 1)

Which of the following is NOT true about IntentService?

- **A.** It is a subclass of the Service class.
- **B.** It can interact directly with the user interface. ✅
- **C.** It handles requests using a worker thread.
- **D.** It automatically stops itself when it runs out of work.

**Đáp án: B**

**Giải thích:** IntentService chạy worker thread, không tương tác UI trực tiếp. Muốn cập nhật UI phải post về main thread. (API đã deprecated, thay bằng JobIntentService/WorkManager.)

---

## Câu 19 (Chọn 1)

In the lifecycle of a Started Service, what is the purpose of onStartCommand() and what does START_STICKY mean?

- **A.** This method starts the service; START_STICKY ensures the service will never be killed.
- **B.** This method is called when startService() is invoked; START_STICKY means if killed, the service may be recreated with a null Intent. ✅
- **C.** This method is called when the service is created; START_STICKY restarts with the original Intent always.
- **D.** This method is called when the service is created; START_STICKY kills the service when resources are low.

**Đáp án: B**

**Giải thích:** onStartCommand() chạy mỗi lần startService(). START_STICKY: hệ thống có thể tạo lại service sau khi kill, nhưng Intent gần nhất có thể null (khác START_REDELIVER_INTENT).

---

## Câu 20 (Chọn 1)

How does using SharedPreferences benefit Android app development?

- **A.** SharedPreferences offer a lightweight and simple way to store small amounts of app data persistently. ✅
- **B.** SharedPreferences enhance the visual design of Android activities.
- **C.** SharedPreferences manage network connectivity efficiently.
- **D.** SharedPreferences handle background tasks seamlessly.

**Đáp án: A**

**Giải thích:** SharedPreferences lưu key-value nhỏ (setting, flag, token…) bền vững, API đơn giản.

---

## Câu 21 (Chọn 1)

Discuss the potential risks and challenges associated with multithreading in Android app development.

- **A.** Potential risks include race conditions, deadlocks, synchronization issues, and increased debugging complexity. ✅
- **B.** Multithreading has no risks as long as AsyncTask is used.
- **C.** Multithreading improves performance without any associated risks.
- **D.** Multithreading only impacts battery consumption and has no other consequences.

**Đáp án: A**

**Giải thích:** Đa luồng dễ race condition, deadlock, khó debug; cập nhật UI sai thread cũng crash. AsyncTask không loại bỏ hết rủi ro.

---

## Câu 22 (Chọn 1)

What is one of the benefits of using IntentService?

- **A.** It can interact directly with the UI.
- **B.** It can handle multiple requests at the same time (true parallelism).
- **C.** It uses a separate thread to handle requests, not blocking the main thread. ✅
- **D.** It can be freely interrupted like a normal Thread always.

**Đáp án: C**

**Giải thích:** IntentService xử lý Intent tuần tự trên worker thread → không block main thread. Không xử lý song song nhiều request cùng lúc.

---

## Câu 23 (Chọn 1)

Which method is called when an Activity is first created?

- **A.** onCreate() ✅
- **B.** onStart()
- **C.** onResume()
- **D.** onPause()

**Đáp án: A**

**Giải thích:** onCreate() là callback khởi tạo đầu tiên khi Activity được tạo.

---

## Câu 24 (Chọn 1)

Which of the following code snippets is used to start a new Activity from the current Activity?

- **A.** startActivity(new Intent(this, NewActivity.class)); ✅
- **B.** new Intent().start(NewActivity.class);
- **C.** Intent.start(this, NewActivity.class);
- **D.** NewActivity.start();

**Đáp án: A**

**Giải thích:** Tạo explicit Intent(context, Target.class) rồi startActivity(intent).

---

## Câu 25 (Chọn 1)

Which support library component provides backward-compatible versions of UI elements?

- **A.** AppCompat ✅
- **B.** Recycler
- **C.** Retrofit
- **D.** ConstraintLayout

**Đáp án: A**

**Giải thích:** AppCompat (AndroidX AppCompat) cung cấp widget/theme tương thích ngược (AppCompatActivity, AppCompatButton…).

---

## Câu 26 (Chọn 1)

Which method is used to display a short message to the user in an Android activity?

- **A.** Toast.makeText(context, "Message", Toast.LENGTH_SHORT).show(); ✅
- **B.** Toast.show(context, "Message", Toast.LENGTH_SHORT).makeText();
- **C.** Toast.display(context, "Message", Toast.LENGTH_SHORT).show();
- **D.** Toast.message(context, "Message", Toast.LENGTH_SHORT).show();

**Đáp án: A**

**Giải thích:** API chuẩn: Toast.makeText(...).show().

---

## Câu 27 (Chọn 1)

What is the first method called in an Activity lifecycle?

- **A.** onStart()
- **B.** onCreate() ✅
- **C.** onResume()
- **D.** onActivityCreate()

**Đáp án: B**

**Giải thích:** Thứ tự: onCreate → onStart → onResume. Không có onActivityCreate().

---

## Câu 28 (Chọn 1)

What is the main purpose of the Espresso testing framework?

- **A.** To test network connectivity
- **B.** To measure battery usage
- **C.** To simulate and verify user interface interactions within a single app ✅
- **D.** To build app APKs

**Đáp án: C**

**Giải thích:** Espresso dùng cho UI instrumented tests trong app (click, type, assert view).

---

## Câu 29 (Chọn 1)

How does the PendingIntent class contribute to handling notification actions?

- **A.** It wraps an Intent to be executed later (e.g., when the user taps the notification). ✅
- **B.** It creates a notification.
- **C.** It manages notification channels.
- **D.** It displays notifications in the status bar.

**Đáp án: A**

**Giải thích:** PendingIntent bọc Intent để hệ thống/app khác thực thi sau (tap notification, action button).

---

## Câu 30 (Chọn 1)

Which method is used to send a notification to the system?

- **A.** sendNotification()
- **B.** notify() ✅
- **C.** push()
- **D.** trigger()

**Đáp án: B**

**Giải thích:** NotificationManager.notify(id, notification) / NotificationManagerCompat.notify(...).

---

## Câu 31 (Chọn 1)

Which approach provides the most flexibility for handling different types of broadcasts?

- **A.** Static registration in the manifest
- **B.** Dynamic registration in code ✅
- **C.** Using sendBroadcast()
- **D.** Using sendStickyBroadcast()

**Đáp án: B**

**Giải thích:** Đăng ký động (Context.registerReceiver) linh hoạt: bật/tắt theo lifecycle, filter runtime. Manifest tĩnh bị hạn chế implicit broadcast trên Android mới.

---

## Câu 32 (Chọn 1)

Which method would you use to send a broadcast to all registered receivers?

- **A.** sendBroadcast() ✅
- **B.** sendOrderedBroadcast()
- **C.** sendStickyBroadcast()
- **D.** sendLocalBroadcast()

**Đáp án: A**

**Giải thích:** sendBroadcast() gửi normal broadcast tới mọi receiver phù hợp (không đảm bảo thứ tự xử lý).

---

## Câu 33 (Chọn 1)

Which type of broadcast should you use to ensure receivers process it in a specific order, allowing modifications before passing it to the next?

- **A.** Normal Broadcast
- **B.** Ordered Broadcast ✅
- **C.** Local Broadcast
- **D.** Sticky Broadcast

**Đáp án: B**

**Giải thích:** Ordered broadcast xử lý tuần tự theo priority; receiver có thể abort hoặc sửa kết quả trước khi tới receiver tiếp.

---

## Câu 34 (Chọn 1)

What is the difference between a system broadcast and a custom broadcast in Android?

- **A.** System broadcasts are sent by the system; custom broadcasts are sent by apps. ✅
- **B.** System broadcasts handle UI updates; custom broadcasts handle background tasks.
- **C.** System broadcasts are for network operations; custom broadcasts are for file operations.
- **D.** System broadcasts are less secure than custom broadcasts always.

**Đáp án: A**

**Giải thích:** System broadcast do OS phát (BOOT_COMPLETED, connectivity…). Custom broadcast do app tự sendBroadcast với action riêng.

---

## Câu 35 (Chọn 1)

What is the primary purpose of the AndroidManifest.xml file in an Android app?

- **A.** To define the layout of the app's user interface
- **B.** To store all the app's Java code
- **C.** To declare essential app information to the Android system ✅
- **D.** To display the app on the Play Store

**Đáp án: C**

**Giải thích:** Manifest khai báo package, component, permission, intent-filter… cho hệ thống Android.

---

## Câu 36 (Chọn 1)

What is the correct sequence of the 6 phases of the application development process? (1 Build/run, 2 Write code, 3 Define layout, 4 Test/debug, 5 Create project, 6 Publish)

- **A.** 1 → 2 → 3 → 4 → 5 → 6
- **B.** 3 → 1 → 2 → 4 → 5 → 6
- **C.** 1 → 2 → 3 → 4 → 5 → 6 (duplicate wrong order)
- **D.** 5 → 3 → 2 → 1 → 4 → 6 ✅

**Đáp án: D**

**Giải thích:** Quy trình hợp lý: tạo project (5) → layout UI (3) → viết code (2) → build/run (1) → test/debug (4) → publish (6).

---

## Câu 37 (Chọn 1)

What is the primary purpose of the Android Software Development Kit (SDK)?

- **A.** To provide pre-built applications for Android devices
- **B.** To offer a set of tools and libraries for developing Android apps ✅
- **C.** To manage the Android operating system updates
- **D.** To simulate Android hardware for testing purposes only

**Đáp án: B**

**Giải thích:** Android SDK gồm tools, libraries, platform API để phát triển app. Emulator chỉ là một phần.

---

## Câu 38 (Chọn 1)

What is the purpose of an emulator in Android development?

- **A.** To test the app on real devices only
- **B.** To simulate an Android device environment for testing and debugging ✅
- **C.** To compile the app's code
- **D.** To deploy the app to Google Play Store

**Đáp án: B**

**Giải thích:** Emulator giả lập thiết bị Android để chạy/test app khi không có máy thật.

---

## Câu 39 (Chọn 1)

Which attribute is used to specify the ID of a View in XML layout files?

- **A.** id
- **B.** android:id ✅
- **C.** identifier
- **D.** viewId

**Đáp án: B**

**Giải thích:** Dùng android:id="@+id/name" trong layout XML.

---

## Câu 40 (Chọn 1)

Which method allows the user to return to the previous activity?

- **A.** finish() ✅
- **B.** return()
- **C.** exitActivity()
- **D.** close()

**Đáp án: A**

**Giải thích:** finish() đóng Activity hiện tại, quay lại Activity trước trên back stack (tương tự Back).

---

## Câu 41 (Chọn 1)

RecyclerView provides a choice of three built-in layout managers:

- **A.** LinearLayout, FrameLayout, StaggeredGridLayout
- **B.** FrameLayout, GridLayout, ConstraintLayout
- **C.** LinearLayoutManager, GridLayoutManager, StaggeredGridLayoutManager ✅
- **D.** ConstraintLayout, GridLayout, StaggeredGridLayout

**Đáp án: C**

**Giải thích:** Ba LayoutManager built-in: Linear, Grid, StaggeredGrid. Frame/Constraint là ViewGroup layout, không phải LayoutManager của RecyclerView. (Đề ghi StaggredGridLayout — ý là StaggeredGrid.)

---

## Câu 42 (Chọn 1)

Which three methods are required in a RecyclerView.Adapter?

- **A.** onCreateViewHolder(), onBindViewHolder(), getItemCount() ✅
- **B.** getView(), getItemViewType(), getItemId()
- **C.** setAdapter(), setLayoutManager(), addItem()
- **D.** onStart(), onResume(), onStop()

**Đáp án: A**

**Giải thích:** Adapter bắt buộc implement 3 method abstract: tạo ViewHolder, bind data, trả số item.

---

## Câu 43 (Chọn 1)

What XML attribute sets a hint inside an EditText field?

- **A.** android:placeholder
- **B.** android:caption
- **C.** android:hint ✅
- **D.** android:label

**Đáp án: C**

**Giải thích:** android:hint hiển thị gợi ý khi EditText trống.

---

## Câu 44 (Chọn 1)

What is the purpose of the onBindViewHolder() method in Adapter?

- **A.** To attach a new View to RecyclerView
- **B.** To create a new ViewHolder for an item
- **C.** To bind data at a specific position to its ViewHolder ✅
- **D.** To remove an item from the list

**Đáp án: C**

**Giải thích:** onBindViewHolder gán data vị trí position vào ViewHolder. Tạo ViewHolder là onCreateViewHolder.

---

## Câu 45 (Chọn 1)

When adding a Google Map, which step is necessary to accurately display the user's current location?

- **A.** Call map.setMyLocationEnabled(true) after ensuring you have the required location permissions. ✅
- **B.** Use LocationManager only and manually place a marker (this is the only allowed way).
- **C.** Modify the application's theme in styles.xml to include a map view.
- **D.** Do nothing; Google Maps always shows location automatically without API calls.

**Đáp án: A**

**Giải thích:** Bật my-location layer bằng setMyLocationEnabled(true) sau khi có permission location (và setup API key/manifest).

---

## Câu 46 (Chọn 1)

A developer adds a polyline between three cities. Which method is used to draw this path on the map?

- **A.** map.addLine()
- **B.** map.drawPath()
- **C.** map.addPolyline() ✅
- **D.** map.createRoute()

**Đáp án: C**

**Giải thích:** GoogleMap.addPolyline(PolylineOptions) vẽ đường gãy khúc nối các LatLng.

---

## Câu 47 (Chọn 1)

What XML tag is commonly used to add a Google Map to an Android layout (SupportMapFragment pattern)?

- **A.** <MapView>
- **B.** <MapFragment>
- **C.** <fragment> (with class/android:name = SupportMapFragment) ✅
- **D.** <GoogleMap>

**Đáp án: C**

**Giải thích:** Cách phổ biến: thẻ <fragment> với class SupportMapFragment/MapFragment. MapView cũng dùng được nhưng không phải đáp án đề chọn.

---

## Câu 48 (Chọn 1)

Which Google Maps API approach is used related to setting the map's camera position (as marked in the exam key)?

- **A.** setCameraPosition()
- **B.** setCameraTarget()
- **C.** CameraUpdateFactory.newCameraPosition(...) / moveCamera/animateCamera ✅
- **D.** map.cameraZoom

**Đáp án: C**

**Giải thích:** Trong code: map.moveCamera(CameraUpdateFactory.newCameraPosition(...)). Attribute XML camera có map:cameraTargetLat… nhưng key đề chọn C.

---

## Câu 49 (Chọn 1)

Android Architecture Components provide convenience annotations for DAOs. Which of the following is NOT supported?

- **A.** @Query
- **B.** @Insert
- **C.** @Update
- **D.** @Select ✅

**Đáp án: D**

**Giải thích:** Room có @Query, @Insert, @Update, @Delete — không có @Select. SELECT viết trong @Query("SELECT ...").

---

## Câu 50 (Chọn 1)

What is the primary method used to open or create a SQLite database in Android?

- **A.** SQLiteDatabase.openDatabase()
- **B.** SQLiteDatabase.createDatabase()
- **C.** SQLiteDatabase.openOrCreateDatabase() ✅
- **D.** SQLiteOpenHelper.getDatabase()

**Đáp án: C**

**Giải thích:** openOrCreateDatabase() mở DB nếu có, không có thì tạo. Thực tế hay dùng SQLiteOpenHelper.getWritableDatabase(), nhưng key đề là C.

---

## Câu 51 (Chọn 1)

When using an SQLite database, how is a row identified?

- **A.** By its column name
- **B.** By a unique ID ✅
- **C.** By the name of the table
- **D.** By the name of the database

**Đáp án: B**

**Giải thích:** Mỗi hàng thường có PRIMARY KEY / _id duy nhất để nhận diện row.

---

## Câu 52 (Chọn 1)

How do you define entities and data access objects (DAOs) in Room database?

- **A.** By annotating Java/Kotlin classes with @Entity for entities and @Dao for DAOs ✅
- **B.** By creating XML layout files for entities and DAOs
- **C.** By using only predefined classes provided by Room without annotations
- **D.** Entities and DAOs are not used in Room database

**Đáp án: A**

**Giải thích:** Room: class + @Entity, interface + @Dao, abstract class + @Database.

---

## Câu 53 (Chọn 1)

Which method/component should be avoided for handling business logic in MVC architecture?

- **A.** View ✅
- **B.** Model
- **C.** Controller
- **D.** Presenter

**Đáp án: A**

**Giải thích:** View chỉ hiển thị/UI. Business logic để Model/Controller, không nhét vào View.

---

## Câu 54 (Chọn 1)

Which role does the ViewModel play in the MVVM architecture?

- **A.** The ViewModel manages the UI state and interacts with the Model. ✅
- **B.** The ViewModel directly manipulates the View's UI elements.
- **C.** The ViewModel only handles raw touch events on widgets.
- **D.** The ViewModel is solely responsible for data persistence.

**Đáp án: A**

**Giải thích:** ViewModel giữ UI state + presentation logic, lấy data từ Model/repo; không reference trực tiếp View.

---

## Câu 55 (Chọn 1)

How does data binding benefit MVVM architecture?

- **A.** It reduces boilerplate code by automatically updating the view when the data changes. ✅
- **B.** It encrypts data to enhance security.
- **C.** It increases data storage capacity.
- **D.** It simplifies network operations.

**Đáp án: A**

**Giải thích:** Data binding / observation giảm code gán tay view.setText(...); UI cập nhật khi state đổi.

---

## Câu 56 (Chọn 1)

What is the role of the onReceive method in a BroadcastReceiver?

- **A.** To initialize the BroadcastReceiver
- **B.** To handle the broadcast message ✅
- **C.** To send a broadcast message
- **D.** To unregister the BroadcastReceiver

**Đáp án: B**

**Giải thích:** onReceive(Context, Intent) được gọi khi có broadcast khớp filter — nơi xử lý sự kiện.

---

## Câu 57 (Chọn 1)

Which of the following is a correct way to create an instance of a Retrofit API interface?

- **A.** Retrofit retrofit = new Retrofit(); MyApi api = retrofit.create(MyApi.class);
- **B.** Retrofit retrofit = Retrofit.create(); MyApi api = retrofit.newInstance(MyApi.class);
- **C.** Retrofit retrofit = new Retrofit.Builder().baseUrl(BASE_URL).addConverterFactory(GsonConverterFactory.create()).build(); MyApi api = retrofit.create(MyApi.class); ✅
- **D.** Retrofit retrofit = Retrofit.newInstance(BASE_URL); MyApi api = retrofit.createInstance(MyApi.class);

**Đáp án: C**

**Giải thích:** Dùng Retrofit.Builder: baseUrl + converter rồi build(); sau đó retrofit.create(ApiInterface.class).

---

## Câu 58 (Chọn 1)

Which Google Map method is used to remove all markers, polylines, polygons, and overlays from the map?

- **A.** clear() ✅
- **B.** removeMarker()
- **C.** removePolyline()
- **D.** resetMap()

**Đáp án: A**

**Giải thích:** GoogleMap.clear() xóa toàn bộ marker/polyline/polygon/overlay trên map.

---

## Câu 59 (Chọn 1)

You are making a request to /group/5/users?sort=name. How should you define the sort parameter in the Retrofit method using a query parameter?

- **A.** @Query("sort") String sort ✅
- **B.** @Path("sort") String sort
- **C.** @Field("sort") String sort
- **D.** @Url("sort") String sort

**Đáp án: A**

**Giải thích:** Query string ?sort=name map bằng @Query("sort"). @Path cho {path}; @Field cho form body.

---

## Câu 60 (Chọn 1)

How do you send a GET request to a web service URL in Android?

- **A.** Use libraries like Retrofit or Volley for asynchronous HTTP requests. ✅
- **B.** Embed the URL directly within the XML layout file.
- **C.** Call execute() method on an AsyncTask with the URL only (complete solution).
- **D.** Utilize HttpURLConnection for opening connections and reading responses (also valid, but exam key is A).

**Đáp án: A**

**Giải thích:** Cách phổ biến/đúng hướng dẫn hiện đại: Retrofit/Volley (async, dễ dùng). HttpURLConnection cũng được nhưng đề chọn A.

---
