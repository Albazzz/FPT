# PRM392 - SP26 - FE — Đáp án & Giải thích

- Môn: **PRM392**
- Nguồn: https://fuexam.me/threads/prm392-sp26-fe.9/
- Tổng số câu: **60**

> Mỗi câu có: lựa chọn · **đáp án** · **giải thích tiếng Việt**.

---

## Câu 1 (Chọn 1)

How do Service and Activity differ in terms of their main functions?

- **A.** Service has a user interface and runs in the background, while Activity has no UI and runs in the foreground.
- **B.** Service has no user interface and can run indefinitely in the background, while Activity has a UI and exists only when the user interacts with it. ✅
- **C.** Both have UI and can run in the background.
- **D.** Both have no UI and are only used for data processing.

**Đáp án: B**

**Giải thích:** Activity là màn hình có UI, chỉ sống khi user tương tác. Service không có UI và chạy nền (background), có thể chạy lâu dài (foreground service / started service).

---

## Câu 2 (Chọn 1)

What is an Activity?

- **A.** A component that runs only in the background without a user interface.
- **B.** A fundamental component of most applications, representing a window or a screen. ✅
- **C.** An XML file used to store data.
- **D.** A library for handling network requests.

**Đáp án: B**

**Giải thích:** Activity là thành phần cơ bản đại diện cho một cửa sổ/màn hình UI trong app Android.

---

## Câu 3 (Chọn 1)

What class is used to create backward-compatible notifications?

- **A.** Notification.Builder
- **B.** NotificationManagerCompat
- **C.** NotificationCompat.Builder ✅
- **D.** NotificationCompat.Channel

**Đáp án: C**

**Giải thích:** NotificationCompat.Builder (support/AndroidX) dùng để tạo notification tương thích ngược nhiều API level. NotificationManagerCompat dùng để hiển thị/hủy notification, không phải builder tạo nội dung.

---

## Câu 4 (Chọn 1)

What is the purpose of the AndroidManifest.xml file in Android?

- **A.** To store project configuration information
- **B.** To declare application's activities and permissions ✅
- **C.** To manage project dependencies
- **D.** To create the application's UI

**Đáp án: B**

**Giải thích:** AndroidManifest.xml khai báo component (Activity, Service, Receiver, Provider), permission, intent-filter, metadata… Dependencies nằm ở Gradle; UI nằm ở layout XML/Compose.

---

## Câu 5 (Chọn 1)

Which of the following layout managers is NOT provided by Android?

- **A.** LinearLayoutManager
- **B.** GridLayoutManager
- **C.** CircularLayoutManager ✅
- **D.** StaggeredGridLayoutManager

**Đáp án: C**

**Giải thích:** RecyclerView có sẵn LinearLayoutManager, GridLayoutManager, StaggeredGridLayoutManager. CircularLayoutManager không phải class chuẩn của Android SDK.

---

## Câu 6 (Chọn 2)

When creating a Client program, which methods/constructors need to be called to set up the I/O stream for communication with the Server?

- **A.** new PrintWriter(socket.getOutputStream()) ✅
- **B.** new BufferedReader(new InputStreamReader(socket.getInputStream())) ✅
- **C.** socket()
- **D.** bind()

**Đáp án: A, B**

**Giải thích:** Client cần luồng ghi (OutputStream → PrintWriter) và luồng đọc (InputStream → BufferedReader). socket() tạo socket; bind() thường dùng phía server, không phải bước setup I/O stream của client.

---

## Câu 7 (Chọn 1)

What is the primary mechanism used to pass data between Activities in Android?

- **A.** Shared Preferences
- **B.** Files
- **C.** Intents ✅
- **D.** Databases

**Đáp án: C**

**Giải thích:** Cơ chế chính để chuyển dữ liệu giữa Activity là Intent (putExtra/getExtra). SharedPreferences/File/DB dùng lưu trữ, không phải cơ chế navigation chính.

---

## Câu 8 (Chọn 1)

Consider: result_columns = {KEY_ID, COL1, COL2}. Which snippet prints COL1 values correctly if the result is not empty?

- **A.** if (cursor.moveToFirst()) { do { System.out.println(cursor.getString(1)); } while (cursor.moveToNext()); } ✅
- **B.** do { System.out.println(cursor.getString(0)); } while (cursor.moveToNext());
- **C.** if (cursor.moveToFirst()) { do { System.out.println(cursor.getString(0)); } while (cursor.moveToNext()); }
- **D.** if (cursor != null) { do { System.out.println(cursor.getString(1)); } while (!cursor.isNull(0)); }

**Đáp án: A**

**Giải thích:** Cột projection: index 0 = KEY_ID, index 1 = COL1. Cần moveToFirst() trước khi đọc, rồi lặp moveToNext(). getString(1) mới là COL1.

---

## Câu 9 (Chọn 1)

How does the MVVM architecture primarily differ from the MVP architecture?

- **A.** MVVM uses data binding to automatically update the view when the model/viewmodel changes, unlike MVP. ✅
- **B.** MVP uses data binding while MVVM does not.
- **C.** MVVM does not use a model component.
- **D.** MVVM requires more manual handling of view updates.

**Đáp án: A**

**Giải thích:** Khác biệt nổi bật: MVVM dùng data binding / observation (LiveData, StateFlow) để View tự cập nhật. MVP thường cập nhật View qua interface thủ công từ Presenter.

---

## Câu 10 (Chọn 1)

Which permission allows an Android application to write to external storage?

- **A.** android.permission.READ_EXTERNAL_STORAGE
- **B.** android.permission.WRITE_EXTERNAL_STORAGE ✅
- **C.** android.permission.CAMERA
- **D.** android.permission.SEND_SMS

**Đáp án: B**

**Giải thích:** WRITE_EXTERNAL_STORAGE cho phép ghi bộ nhớ ngoài (trên API cũ). READ chỉ đọc; CAMERA/SMS là quyền khác.

---

## Câu 11 (Chọn 1)

What are the two main types of contextual menus in Android?

- **A.** Options Menu and Popup Menu
- **B.** Floating Context Menu and Contextual Action Mode ✅
- **C.** Dialog Menu and Bottom Sheet Menu
- **D.** Overflow Menu and Context Menu

**Đáp án: B**

**Giải thích:** Hai loại contextual menu chính: floating context menu (long-press) và contextual action mode/action bar (chọn nhiều item, bulk action).

---

## Câu 12 (Chọn 2)

What methods can be used to obtain the SHA-1 key of an Android project? (Choose 2 correct answers)

- **A.** Run signingReport from Android Studio (Gradle task). ✅
- **B.** Read SHA-1 from strings.xml in the project.
- **C.** Run keytool -list -v -keystore debug.keystore in Terminal. ✅
- **D.** Retrieve it from Google Play Console after publishing the application.

**Đáp án: A, C**

**Giải thích:** Cách phổ biến lấy SHA-1: Gradle signingReport hoặc lệnh keytool trên keystore. SHA-1 không nằm trong strings.xml; Play Console có app signing cert nhưng không phải cách lấy debug SHA-1 khi dev.

---

## Câu 13 (Chọn 1)

What is an implicit intent used for?

- **A.** To start an activity within the same app only
- **B.** To navigate to a specific XML layout
- **C.** To request an action that another app can handle ✅
- **D.** To define a custom action inside the app

**Đáp án: C**

**Giải thích:** Implicit Intent mô tả hành động (ACTION_VIEW, ACTION_SEND…) để hệ thống/app khác xử lý, không chỉ định class cụ thể như Explicit Intent.

---

## Câu 14 (Chọn 1)

Which significance does the android:orientation attribute have within a LinearLayout?

- **A.** It determines the color of the layout.
- **B.** It defines whether the child views are arranged horizontally or vertically. ✅
- **C.** It sets the padding around the layout.
- **D.** It controls the layout's visibility.

**Đáp án: B**

**Giải thích:** android:orientation = horizontal | vertical → xếp con theo hàng ngang hoặc cột dọc.

---

## Câu 15 (Chọn 1)

In the context of Android MVP, what is the responsibility of the View?

- **A.** To display data and handle user interactions. ✅
- **B.** To store data in the database.
- **C.** To implement business logic.
- **D.** To send notifications to the user.

**Đáp án: A**

**Giải thích:** Trong MVP: View hiển thị dữ liệu và nhận tương tác user; Presenter lo logic; Model lo dữ liệu.

---

## Câu 16 (Chọn 1)

Which component of Android is responsible for receiving and reacting to broadcast announcements?

- **A.** Activities
- **B.** Services
- **C.** BroadcastReceivers ✅
- **D.** ContentProviders

**Đáp án: C**

**Giải thích:** BroadcastReceiver nhận và phản ứng broadcast Intent (hệ thống hoặc custom).

---

## Câu 17 (Chọn 1)

What is the fundamental characteristic of a LinearLayout in Android?

- **A.** It arranges child views in a grid pattern.
- **B.** It arranges child views in a stack, either horizontally or vertically. ✅
- **C.** It allows for complex nested layouts.
- **D.** It's primarily used for creating circular layouts.

**Đáp án: B**

**Giải thích:** LinearLayout xếp các view con theo một chiều (horizontal/vertical).

---

## Câu 18 (Chọn 1)

Which method best suits saving minimal unsaved data just before the user switches to another app?

- **A.** onDestroy()
- **B.** onResume()
- **C.** onPause() ✅
- **D.** onCreate()

**Đáp án: C**

**Giải thích:** onPause() được gọi khi user rời Activity (ví dụ Home/switch app). Đây là chỗ phù hợp lưu dữ liệu nhỏ/unsaved state trước khi app mất focus.

---

## Câu 19 (Chọn 1)

Which of the following is NOT a type of data storage option in Android?

- **A.** SharedPreferences
- **B.** Internal Storage
- **C.** External Storage
- **D.** Activity Stack ✅

**Đáp án: D**

**Giải thích:** Activity Stack quản lý back stack navigation, không phải tùy chọn lưu trữ dữ liệu.

---

## Câu 20 (Chọn 2)

Which of the following statements are correct regarding Android's Internal Storage?

- **A.** Files in internal storage are accessible by other apps by default.
- **B.** Files saved in internal storage are private to the app by default. ✅
- **C.** Internal storage uses the device's file system. ✅
- **D.** Internal storage is always wiped only when the user factory-resets the device, never when uninstalling the app.

**Đáp án: B, C**

**Giải thích:** Internal storage mặc định private theo app; dùng file system của thiết bị. App khác không truy cập mặc định; dữ liệu thường bị xóa khi gỡ app.

---

## Câu 21 (Chọn 1)

Why is Retrofit commonly used in Android development?

- **A.** Retrofit simplifies network requests with its high-level API. ✅
- **B.** Retrofit enhances UI design in Android apps.
- **C.** Retrofit manages database operations in Android.
- **D.** Retrofit handles lifecycle events in Android apps.

**Đáp án: A**

**Giải thích:** Retrofit là HTTP client type-safe, đơn giản hóa gọi REST API (annotation @GET/@POST, converter JSON…).

---

## Câu 22 (Chọn 1)

What are the potential consequences of performing long-running tasks on the main thread in an Android app?

- **A.** Performing long-running tasks on the main thread can lead to ANR (Application Not Responding) errors. ✅
- **B.** Performing long-running tasks on the main thread improves app performance.
- **C.** Performing long-running tasks on the main thread reduces battery consumption.
- **D.** Performing long-running tasks on the main thread speeds up the execution of background tasks.

**Đáp án: A**

**Giải thích:** Main thread lo UI. Chặn main thread quá lâu → ANR, app đơ.

---

## Câu 23 (Chọn 1)

In the context of multithreading in Android, what is the primary reason for using worker threads?

- **A.** To directly manipulate UI components for faster rendering.
- **B.** To execute time-consuming operations without blocking the main thread. ✅
- **C.** To simplify the structure of the main thread.
- **D.** To replace the main thread entirely.

**Đáp án: B**

**Giải thích:** Worker thread chạy việc nặng (network, I/O, compute) để không block UI thread. UI vẫn phải cập nhật trên main thread.

---

## Câu 24 (Chọn 1)

Which permissions need to be added to the AndroidManifest.xml for Google Maps to work?

- **A.** android.permission.INTERNET ✅
- **B.** android.permission.BLUETOOTH
- **C.** android.permission.CAMERA
- **D.** android.permission.READ_CONTACTS

**Đáp án: A**

**Giải thích:** Google Maps cần mạng để tải tile bản đồ → INTERNET (thường kèm ACCESS_NETWORK_STATE / location nếu cần vị trí).

---

## Câu 25 (Chọn 1)

Which method would you use in UI Automator to find a UI element by text?

- **A.** findTextElement()
- **B.** onView(withText())
- **C.** UiSelector().text() ✅
- **D.** selectByText()

**Đáp án: C**

**Giải thích:** UI Automator dùng UiSelector (ví dụ new UiSelector().text("...")). onView(withText()) thuộc Espresso.

---

## Câu 26 (Chọn 1)

Which of the following statements about Android's Shared Preferences are correct?

- **A.** Shared Preferences are stored as JSON files.
- **B.** getPreferences() is used to access application-level preferences.
- **C.** clear() removes a specific key-value pair.
- **D.** Shared Preferences allow activities and applications to keep data in key-value pairs. ✅

**Đáp án: D**

**Giải thích:** SharedPreferences lưu key-value. Thực tế lưu XML (không phải JSON). getPreferences() là activity-level; getSharedPreferences() mới dùng chung app. remove(key) xóa 1 key; clear() xóa hết.

---

## Câu 27 (Chọn 1)

Which widget is used to group RadioButtons so that only one option can be selected at a time?

- **A.** RadioGroup ✅
- **B.** RadioButton
- **C.** CheckBox
- **D.** Switch

**Đáp án: A**

**Giải thích:** RadioGroup chứa các RadioButton thành nhóm chọn 1. CheckBox/Switch cho phép chọn độc lập.

---

## Câu 28 (Chọn 1)

Which purpose does the SeekBar widget serve, and which typical use case does it support?

- **A.** To display a list of selectable items.
- **B.** To allow users to select a value within a range by dragging a thumb. ✅
- **C.** To display a single line of text.
- **D.** To act as a simple on/off switch.

**Đáp án: B**

**Giải thích:** SeekBar cho user kéo chọn giá trị trong khoảng (volume, brightness, progress…).

---

## Câu 29 (Chọn 1)

Which of the following best describes the relationship between View and ViewModel in MVVM?

- **A.** The View observes changes in the ViewModel. ✅
- **B.** The ViewModel observes the View and updates widgets directly.
- **C.** The View updates the ViewModel using direct method calls only without observation.
- **D.** The ViewModel sends data to the Model directly without the View.

**Đáp án: A**

**Giải thích:** View observe ViewModel (LiveData/StateFlow). ViewModel không giữ reference View → tránh memory leak, tách UI.

---

## Câu 30 (Chọn 1)

If the user denies a permission request and selects "Never Ask Again," what happens, and how can the application restore that functionality?

- **A.** The application will not be able to use that functionality, and the user must uninstall and reinstall the application.
- **B.** The next time the application requests, the system will automatically grant permission.
- **C.** The application can no longer request that permission via the dialog, and the user must go to device Settings to grant permission manually. ✅
- **D.** The application can continue to send permission requests until the user agrees.

**Đáp án: C**

**Giải thích:** Chọn "Never ask again" → hệ thống không hiện dialog request nữa. App nên hướng user vào Settings để bật quyền thủ công (không bắt buộc gỡ cài).

---

## Câu 31 (Chọn 1)

In MVVM, what component is responsible for handling the presentation logic and interacting with the View?

- **A.** Model
- **B.** View
- **C.** ViewModel ✅
- **D.** Controller

**Đáp án: C**

**Giải thích:** ViewModel giữ presentation logic, expose state cho View. Model lo data; View lo hiển thị.

---

## Câu 32 (Chọn 1)

What is the primary purpose of a BroadcastReceiver?

- **A.** To send custom broadcasts only.
- **B.** To manage long-running background tasks with UI.
- **C.** To register for and receive notifications of Intents. ✅
- **D.** To define the user interface of an application.

**Đáp án: C**

**Giải thích:** BroadcastReceiver đăng ký nhận Intent broadcast và xử lý khi có sự kiện.

---

## Câu 33 (Chọn 1)

Consider a RecyclerView.Adapter with private List<String> data. Identify the correct implementation of getItemCount().

- **A.** return 0;
- **B.** return 1;
- **C.** return data.length;
- **D.** return data.size(); ✅

**Đáp án: D**

**Giải thích:** List dùng size(), không phải length (length dành cho array). getItemCount() phải trả số phần tử thực tế.

---

## Câu 34 (Chọn 1)

You are designing an app that displays a list of news articles on the left and article content on the right on tablets, but on phones the article content should appear on a separate screen. Which component should you use?

- **A.** Use a single Activity with conditional layout visibility only
- **B.** Implement the UI entirely using custom Views
- **C.** Use Fragments to separate the list and detail views ✅
- **D.** Rely on multiple Services to manage UI data

**Đáp án: C**

**Giải thích:** Master-detail UI kinh điển dùng Fragment: tablet hiện 2 pane, phone swap Fragment/Activity riêng cho detail.

---

## Câu 35 (Chọn 1)

What is the purpose of the publishProgress() method in an AsyncTask?

- **A.** To start the background task
- **B.** To update the progress of the background task on the UI thread ✅
- **C.** To cancel the background task immediately
- **D.** To handle user input

**Đáp án: B**

**Giải thích:** publishProgress() gọi từ doInBackground → kích hoạt onProgressUpdate() trên UI thread để cập nhật progress bar/UI.

---

## Câu 36 (Chọn 1)

Which type of contextual menu is best suited for allowing users to select multiple items in a RecyclerView and perform a bulk action?

- **A.** Floating Context Menu
- **B.** Contextual Action Mode ✅
- **C.** Options Menu
- **D.** Popup Menu

**Đáp án: B**

**Giải thích:** Contextual Action Mode (CAB/ActionMode) hỗ trợ multi-select + bulk actions (delete, share…).

---

## Câu 37 (Chọn 1)

Among the listed socket programming methods, which method is used only for UDP sockets, not TCP?

- **A.** bind()
- **B.** connect()
- **C.** read() and write()
- **D.** sendto() and recvfrom() ✅

**Đáp án: D**

**Giải thích:** sendto/recvfrom đặc trưng UDP (datagram, có địa chỉ đích mỗi lần gửi). TCP dùng stream read/write sau khi connect.

---

## Câu 38 (Chọn 1)

What is the primary function of the ContentResolver in the Content Provider architecture?

- **A.** To define the structure and format of the data.
- **B.** To directly interact with the underlying data storage (e.g., SQLite database).
- **C.** To handle permissions for accessing the Content Provider.
- **D.** To send requests to and receive responses from the Content Provider. ✅

**Đáp án: D**

**Giải thích:** Client dùng ContentResolver.query/insert/update/delete để gửi request tới ContentProvider qua URI. Provider mới chạm storage bên dưới.

---

## Câu 39 (Chọn 1)

Which method is used to cancel a notification in Android?

- **A.** removeNotification()
- **B.** cancel() ✅
- **C.** dismissNotification()
- **D.** clearNotification()

**Đáp án: B**

**Giải thích:** NotificationManager / NotificationManagerCompat.cancel(id) (hoặc cancelAll()) để hủy notification.

---

## Câu 40 (Chọn 1)

You have two BroadcastReceiver instances registered for the same custom intent. One has android:priority="100", the other has "50". Which receiver will be invoked first?

- **A.** The one with priority 50 as lower priority executes first
- **B.** Both will be called simultaneously
- **C.** The one with priority 100 ✅
- **D.** The order is random regardless of priority

**Đáp án: C**

**Giải thích:** Với ordered broadcast, priority cao hơn được gọi trước. 100 > 50 nên receiver priority 100 chạy trước.

---

## Câu 41 (Chọn 1)

You are implementing a BroadcastReceiver to respond to Bluetooth state changes. Where should you register the receiver to ensure it works even when your app is not running?

- **A.** In the onResume() method of an Activity
- **B.** Using dynamic registration in a running Service
- **C.** Statically in AndroidManifest.xml ✅
- **D.** Inside a Fragment's onCreateView()

**Đáp án: C**

**Giải thích:** Đăng ký tĩnh trong Manifest cho phép nhận broadcast khi app không chạy (tùy hạn chế Android version/implicit broadcast). Dynamic chỉ sống khi component đang chạy.

---

## Câu 42 (Chọn 1)

What happens in the lifecycle of an Activity when the user presses the Home button?

- **A.** onPause() followed by onStop(). ✅
- **B.** onRestart() followed by onStart().
- **C.** onDestroy() immediately.
- **D.** onPause() followed by onDestroy().

**Đáp án: A**

**Giải thích:** Nhấn Home: Activity mất focus → onPause(), rồi không còn visible → onStop(). Không destroy ngay.

---

## Câu 43 (Chọn 1)

What happens to a Fragment's lifecycle when its host Activity is paused?

- **A.** The Fragment continues to run independently.
- **B.** The Fragment is destroyed.
- **C.** The Fragment's lifecycle methods are paused in sequence with the Activity's onPause() method. ✅
- **D.** The Fragment detaches from the Activity.

**Đáp án: C**

**Giải thích:** Fragment gắn với host Activity: Activity onPause → Fragment cũng onPause theo.

---

## Câu 44 (Chọn 1)

Which of the following is typically considered a hardware sensor category (as opposed to a content/provider data source like Calendar)?

- **A.** Sensor ✅
- **B.** Calendar
- **C.** Camera
- **D.** Location

**Đáp án: A**

**Giải thích:** Sensor (accelerometer, gyroscope…) thuộc Sensor framework. Calendar thường qua ContentProvider/CalendarContract; Camera/Location là phần cứng/API riêng nhưng đáp án chuẩn về "Sensor framework" là A. (OCR thiếu stem; giữ theo option gốc đề.)

---

## Câu 45 (Chọn 1)

Which component is responsible for accessing data provided by a Content Provider?

- **A.** ContentResolver ✅
- **B.** ContentObserver
- **C.** ContentValues
- **D.** Content Contract

**Đáp án: A**

**Giải thích:** Client truy cập data của Provider qua ContentResolver. ContentObserver theo dõi thay đổi; ContentValues chứa dữ liệu insert/update.

---

## Câu 46 (Chọn 1)

Which activity should be avoided in onPause() and left for onStop()?

- **A.** Saving important data
- **B.** Stopping animation
- **C.** Performing resource-intensive operations such as writing large files or closing databases ✅
- **D.** Temporarily hiding views or changing layouts

**Đáp án: C**

**Giải thích:** onPause() phải nhẹ và nhanh (user có thể đang chuyển app). Việc nặng (ghi file lớn, đóng DB phức tạp…) nên để onStop()/background để tránh jank.

---

## Câu 47 (Chọn 1)

How to optimize network requests in Android?

- **A.** Implement caching to reduce network requests. ✅
- **B.** Increase payload size for more data per request.
- **C.** Rely on server-side optimization for better performance only.
- **D.** Disable network requests to save battery.

**Đáp án: A**

**Giải thích:** Cache (HTTP cache, disk/memory cache, Room…) giảm số request và latency. Tăng payload thường làm chậm hơn.

---

## Câu 48 (Chọn 1)

In Android, which method is used to send a normal broadcast?

- **A.** sendOrderedBroadcast()
- **B.** sendBroadcast() ✅
- **C.** sendLocalBroadcast()
- **D.** registerReceiver()

**Đáp án: B**

**Giải thích:** sendBroadcast() gửi normal broadcast (không đảm bảo thứ tự). sendOrderedBroadcast() gửi theo priority; registerReceiver() chỉ đăng ký nhận.

---

## Câu 49 (Chọn 1)

What is the purpose of notification groups in Android?

- **A.** Notification groups allow related notifications to be grouped together for easier management and dismissal. ✅
- **B.** Notification groups replace notification channels completely.
- **C.** Notification groups handle the delivery of notifications to the device.
- **D.** Notification groups specify the importance level of notifications.

**Đáp án: A**

**Giải thích:** setGroup() gom các notification liên quan thành stack/group để quản lý/dismiss dễ hơn. Importance thuộc channel.

---

## Câu 50 (Chọn 1)

You need to send a message from an Android client to a server using sockets. After obtaining the OutputStream, which method ensures the data is immediately transmitted?

- **A.** write()
- **B.** flush() ✅
- **C.** send()
- **D.** transmit()

**Đáp án: B**

**Giải thích:** write() ghi vào buffer; flush() ép đẩy buffer ra network ngay. Không có transmit() chuẩn trên OutputStream.

---

## Câu 51 (Chọn 1)

What happens to the Fragments inside an Activity when the Activity is paused and destroyed?

- **A.** When the Activity is paused, the Fragments continue to run; when the Activity is destroyed, the Fragments are also destroyed.
- **B.** In both cases, the Fragments are paused and added to the back stack.
- **C.** When the Activity is paused, all Fragments within it are also paused; when the Activity is destroyed, all Fragments are also destroyed. ✅
- **D.** When the Activity is paused, the Fragment is added to the back stack; when the Activity is destroyed, they still exist.

**Đáp án: C**

**Giải thích:** Lifecycle Fragment đi theo host: pause → Fragment pause; destroy → Fragment destroy.

---

## Câu 52 (Chọn 2)

List a is defined as a = [1, 2, 3, 4, 5]. Select 2 statements that remove the middle element 3 so that a equals [1, 2, 4, 5]:

- **A.** a[2:2] = []
- **B.** a[2] = []
- **C.** del a[2] ✅
- **D.** a.remove(3) ✅

**Đáp án: C, D**

**Giải thích:** del a[2] xóa phần tử index 2 (giá trị 3). a.remove(3) xóa giá trị 3. a[2]=[] gán list rỗng vào vị trí 2 (sai kiểu). a[2:2]=[] là slice rỗng, không xóa phần tử.

---

## Câu 53 (Chọn 1)

Which annotation is used in Retrofit to send a Java object as the request body?

- **A.** @Query
- **B.** @Path
- **C.** @Field
- **D.** @Body ✅

**Đáp án: D**

**Giải thích:** @Body serialize object thành body request (JSON…). @Query là query param; @Path path param; @Field form-urlencoded.

---

## Câu 54 (Chọn 1)

How does Shared Preferences store data and where in the Android file system?

- **A.** As binary files in the application's cache directory.
- **B.** As XML files in the application's shared_prefs directory. ✅
- **C.** As plain text files in external storage.
- **D.** As a table in a SQLite database.

**Đáp án: B**

**Giải thích:** SharedPreferences được lưu dạng XML trong /data/data/<package>/shared_prefs/.

---

## Câu 55 (Chọn 1)

Which type of contextual menu is best suited for allowing users to select multiple items in a RecyclerView and perform a bulk action?

- **A.** Floating Context Menu
- **B.** Contextual Action Mode ✅
- **C.** Options Menu
- **D.** Popup Menu

**Đáp án: B**

**Giải thích:** Giống câu 36: Contextual Action Mode phù hợp multi-select + bulk action trên list/RecyclerView.

---

## Câu 56 (Chọn 2)

When is onPause() called?

- **A.** When the user starts to leave the current Activity ✅
- **B.** When the Activity is first created
- **C.** Just before the Activity transitions to the Stopped state ✅
- **D.** When the Activity is completely hidden from the screen

**Đáp án: A, C**

**Giải thích:** onPause() khi user bắt đầu rời Activity / Activity mất foreground, và xảy ra trước khi vào Stopped (onStop). Activity bị ẩn hoàn toàn gắn với onStop hơn onPause. onCreate là lúc tạo.

---

## Câu 57 (Chọn 1)

In a socket-based Android application, how should you safely perform network operations without blocking the UI thread?

- **A.** Run socket code directly in the Activity's onCreate() method
- **B.** Run network/socket operations on a background thread (Executor, coroutine, Thread, WorkManager…) ✅
- **C.** Call Thread.sleep() before reading from the socket
- **D.** Disable StrictMode to allow network calls on the main thread

**Đáp án: B**

**Giải thích:** Network không được chạy trên main thread. Dùng background thread/coroutine. Tắt StrictMode chỉ che lỗi, vẫn gây ANR.

---

## Câu 58 (Chọn 1)

When implementing a feature to mark specific user locations on a Google Map, which method correctly adds a marker at a specific latitude and longitude?

- **A.** map.addMarker(new MarkerOptions().position(new LatLng(lat, lng))); ✅
- **B.** map.addPolyline(new PolylineOptions().add(new LatLng(lat, lng)));
- **C.** map.addCircle(new CircleOptions().center(new LatLng(lat, lng)));
- **D.** map.addPolygon(new PolygonOptions().add(new LatLng(lat, lng)));

**Đáp án: A**

**Giải thích:** Marker dùng addMarker + MarkerOptions.position(LatLng). Polyline/Circle/Polygon là geometry khác.

---

## Câu 59 (Chọn 1)

Which of the following is an example of a UI test case?

- **A.** Checking if a network request times out
- **B.** Verifying a button click leads to a new screen ✅
- **C.** Validating JSON data format
- **D.** Optimizing database queries

**Đáp án: B**

**Giải thích:** UI test kiểm tra tương tác giao diện (click button → mở màn mới). Timeout network/JSON/DB thuộc unit/integration/performance.

---

## Câu 60 (Chọn 1)

What are the 4 main components of Android?

- **A.** Activities
- **B.** Services
- **C.** Broadcast Receivers
- **D.** Content Providers
- **E.** All of the others ✅

**Đáp án: E**

**Giải thích:** 4 thành phần chính: Activity, Service, BroadcastReceiver, ContentProvider. Chọn E = tất cả các đáp án kia.

---
