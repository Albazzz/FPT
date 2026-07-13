# -*- coding: utf-8 -*-
"""Scan study materials for undiacritized Vietnamese tokens."""
from __future__ import annotations

import re
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent

# Common English / FE technical terms to ignore
EN = frozenset("""
the and or of to in for with on as by is are be an a this that from into than then
when where which what how why not can may must should will would could has have had
do does did it its if at so no yes all any each both such other more most some only
also just very much many few new old first second third fourth last next same
different high low fast slow large small long short good bad best worst true false
null void none type types mode modes level levels layer layers model models system
systems data file files code codes user users key keys value values name names size
time date year test tests case cases error errors log logs set get add put run use
used using based called known see note example examples figure table index page pages
chapter section volume vol part unit units item items list lists map maps tree trees
graph graphs node nodes edge path root leaf stack queue heap array hash sort search
scan read write load save open close start end begin stop input output main memory
cache disk drive bus bit bits byte bytes word words cpu alu ram rom hdd ssd raid osi
tcp udp ip dns dhcp http https smtp pop imap ftp ssh ssl tls vpn lan wan mac arp
icmp nat vlan sql ddl dml dcl dbms rdb olap oltp etl acid cia isms itsm itil sla slr
kpi kgi cobit pmbok wbs evm spi cpi pv ev ac sv cv fifo lifo sjf fcfs dma mmu tlb
risc cisc gpu soc sip mpu bios gui cui hci ocr omr micr usb sata scsi pcie hdmi poe
qos cdn aes des rsa sha md5 pki ca mfa rbac dac ids ips waf utm wpa wep xss csrf dos
ddos dmz tpm drm nda csr bcp mbo erp crm scm bpr soa saas paas iaas daas oem rfi rfp
rfq ccb ci cmdb spoc rto rpo ola pdca coso iso iec jis ieee itu w3c en jp usa ibm ipa
fe os pc api sdk ide uml oop jit fat ntfs bcd ascii unicode utf ebcdic jpeg mpeg mp3
png html css js xml json rest soap rpc nfs smb ix isp fqdn url www com org net vi ui
ux db qa qc hr pr ir ro vs etc aka ie eg nb ok id src dst max min avg sum cnt len str
int float bool char mid enq deq push pop top bottom left right front back head tail
xor nand nor acc flag flags clock mips flops mtbf mttr tco roi bep eoq emv lp ic lsi
vlsi fpga led lcd oled cd dvd bd sd wlan pan man fdm tdm wdm cdm cdma csma hdlc ppp
pstn isdn atm rtp ntp nntp bootp snmp telnet mime rip ospf bgp ssid wep wpa2 wpa3
utp stp sftp scp ipsec l2tp pptp gre mpls vxlan sdn nfv aws gcp azure faas baas xaas
cli tui web app sql nosql rdbms bi ml ai nlp cv rfid nfc gps gis cad cam cae hrm pos
edi yaml csv tsv pdf docx xlsx pptx txt md ts py java cpp cs go rust php rb swift
kotlin scala r matlab octave julia lua perl bash sh ps1 bat cmd plsql tsql history
computers hardware software network security database algorithm structure processing
information project management business strategy corporate legal affairs development
technology service audit generation vacuum tube transistor integrated circuit large
scale very personal digital assistant field programmable gate chip package storage
arithmetic logical control central auxiliary peripheral device microprocessor
coprocessor immediate direct indirect relative base addressing combinational
sequential flip flop adder shifter comparator boolean karnaugh hazard structural
through mapped associative seek rotational latency transfer track sector cylinder
head platter stripe mirror parity optical magnetic tape flash eeprom dram sram
keyboard mouse scanner printer display speaker camera sensor touch programmed driven
channel interface serial parallel bluetooth wireless batch realtime interactive
centralized distributed series multiplexing standby hot cold fail safe soft hard
atomicity isolation durability consistency throughput response turnaround benchmark
amdahl transaction concurrency rollback commit view join union select insert update
delete drop truncate primary foreign schema entity relationship normalize
normalization waterfall agile scrum prototype spiral incremental verification
validation unit integration acceptance regression black white box coverage scope cost
quality delivery risk stakeholder baseline crashing fast tracking gantt pert cpm
critical path float slack resource leveling incident problem change release
configuration capacity continuity desk catalog known error cmdb itil iso audit control
governance compliance policy standard procedure guideline threat vulnerability asset
confidentiality integrity authenticity accountability non repudiation encryption
decryption symmetric asymmetric public private certificate signature hash salt token
password biometric iris fingerprint voice social engineering phishing malware virus
worm trojan ransomware zero day patch hardening least privilege need know segregation
duties preventive detective corrective internal external evidence follow up summary
checklist before exam intro introduction overview above depends related never always
increases consumption removes random access ipv4 ipv6 round robin priority scheduling
waiting ready running terminated nibble unicode ascii ebcdic quick bubble selection
merge linear binary search available important basic simple complex normal typical
usual current previous final initial secondary major minor total full empty closed
active passive static dynamic protected local global remote native foreign positive
negative absolute nonlinear decimal hexadecimal octal integer floating signed unsigned
volatile nonvolatile hierarchical graceful tolerant wide narrow deep shallow early late
young better worse off down pause resume reset clear remove create destroy receive
connect disconnect bind unbind listen accept reject allow deny grant revoke enable
disable execute compile link boot halt kill suspend signal notify lock unlock acquire
release allocate free window windows linux unix macos android ios chrome firefox safari
edge opera github gitlab bitbucket jenkins readme license mit apache gpl bsd lgpl mpl
cc sa nc nd unlicense proprietary commercial freeware shareware subscription domain
open source paid trial demo beta alpha rc ga lts eol eos version release build hotfix
feature bugfix refactor docs chore ci cd dev staging production prod uat sit preprod
sandbox origin upstream master develop tag commit pull merge rebase cherry pick stash
branch checkout clone fetch status diff show blame bisect revert clean rm mv amend
squash fix continue abort skip quit help config init remote submodule worktree sparse
lfs gc fsck reflog notes replace filter describe archive bundle daemon serve hook hooks
template ignore attributes modules mailmap gitattributes gitignore gitmodules gitkeep
npm yarn pnpm pip conda poetry cargo mod maven gradle sbt nuget composer gem bundler
make cmake ninja bazel ant bank bank300 options correctindex explanation answertext
keywords question answer correct choice unanswered wrong currentindex wrongids answers
progress localstorage pages static site study quiz hub spa router hash nav home footer
badge card button panel modal toast sidebar header container grid flex gap padding
margin border radius shadow color background font weight line height letter spacing
text align display position sticky fixed absolute relative width height overflow scroll
hidden auto block inline pointer cursor hover focus disabled selected bad show hide
inactive loading loaded success warning info primary secondary ghost accent muted
surface outline variant done todo pending passed failed skipped retry export import
download upload share copy paste cut undo redo filter group expand collapse toggle
switch tab tabs menu dropdown checkbox radio range slider spinner skeleton placeholder
label hint tooltip popover dialog alert confirm prompt snackbar banner chip tag avatar
icon image video audio canvas svg path circle rect polyline polygon ellipse tspan defs
use symbol marker clippath mask pattern lineargradient radialgradient stop
foreignobject desc title metadata script style link meta head body html div span p h1
h2 h3 h4 h5 h6 ul ol li a img button input textarea select option form label table tr
td th thead tbody tfoot caption col colgroup nav main aside section article header
footer figure figcaption details summary dialog menu menuitem template slot portal
suspense fragment strictmode profiler context provider consumer reducer action dispatch
store state props ref key children classname style id type name value checked disabled
readonly required placeholder autocomplete autofocus autoplay controls loop muted
preload poster src srcset sizes alt title href target rel download hreflang media type
as crossorigin integrity referrerpolicy nonce defer async charset content equiv name
property itemprop itemscope itemtype role aria label labelledby describedby hidden
expanded controls haspopup pressed selected checked disabled readonly required invalid
busy live atomic relevant dropeffect grabbed activedescendant colcount colindex colspan
rowcount rowindex rowspan level setsize posinset orientation sort valuemin valuemax
valuenow valuetext textbook fundamentals strategy promotion agency japan engineer
fundamental information technology promotion agency exercises index figure table
example note important summary checklist exam volume chapter section hardware software
network security database algorithm structure data processing system project
management business strategy corporate legal affairs development technology service
audit history computers generation first second third fourth fifth vacuum tube
transistor integrated circuit large scale very personal digital assistant field
programmable gate chip package storage arithmetic logical control central auxiliary
peripheral device microprocessor coprocessor immediate direct indirect relative base
addressing combinational sequential flip flop adder shifter comparator boolean
karnaugh hazard structural through mapped associative seek rotational latency transfer
track sector cylinder head platter stripe mirror parity optical magnetic tape flash
eeprom dram sram keyboard mouse scanner printer display speaker camera sensor touch
programmed driven channel interface serial parallel bluetooth wireless batch realtime
interactive centralized distributed series multiplexing standby hot cold fail safe soft
hard atomicity isolation durability consistency throughput response turnaround
benchmark amdahl transaction concurrency rollback commit view join union select insert
update delete drop truncate primary foreign schema entity relationship normalize
normalization waterfall agile scrum prototype spiral incremental verification
validation unit integration acceptance regression black white box coverage scope cost
quality delivery risk stakeholder baseline crashing fast tracking gantt pert cpm
critical path float slack resource leveling incident problem change release
configuration capacity continuity desk catalog known error cmdb itil iso audit control
governance compliance policy standard procedure guideline threat vulnerability asset
confidentiality integrity authenticity accountability non repudiation encryption
decryption symmetric asymmetric public private certificate signature hash salt token
password biometric iris fingerprint voice social engineering phishing malware virus
worm trojan ransomware zero day patch hardening least privilege need know segregation
duties preventive detective corrective internal external evidence follow up eniac
edsac univac neumann stored program general purpose microcomputer supercomputer
workstation smartphone tablet server terminal co processor dedicated register registers
pipeline superscalar multi core branch prediction interleaving virtual paging
segmentation thrashing swapping hypervisor type microkernel monolithic supervisor
bootloader multiboot network boot utility middleware language processor compiler
interpreter assembler linker loader firmware kernel process thread scheduler deadlock
coffman circular wait hold preemption mutual exclusion banker avoidance detection
recovery semaphore mutex page fault reentrant relocatable recursive reusable sequential
indexed partitioned directory path backup full differential incremental archive restore
grandfather father son open source proprietary commercial freeware shareware
subscription public domain gpl bsd apache saas hierarchical network relational tuple
attribute domain occurrence instance selection projection division union difference
intersection cartesian product entity relationship cardinality normalization partial
transitive dependency external conceptual internal schema ddl dml dcl grant revoke
shared exclusive lock timestamp optimistic checkpoint rollback rollforward wal
referential integrity constraint check unique null char varchar integer decimal date
time boolean inner outer left right subquery count sum avg max min group having order
commit rollback warehouse mart star snowflake extract transform load mining nosql
document column graph key value distributed replication fragmentation horizontal
vertical phase commit location transparency topology bus star ring mesh tree peer
client server router switch hub bridge gateway modem proxy firewall packet frame bit
byte word nibble clock mips flops mtbf mttr availability reliability throughput
response turnaround benchmark amdahl transaction concurrency isolation durability
atomicity consistency rollback commit index view join union select insert update delete
drop truncate primary foreign key schema entity relationship normalize normalization
waterfall agile scrum prototype spiral incremental verification validation unit
integration system acceptance regression black white box coverage scope cost quality
delivery risk stakeholder baseline crashing fast tracking gantt pert cpm critical path
float slack resource leveling incident problem change release configuration capacity
continuity service desk catalog known error cmdb itil iso audit control governance
compliance policy standard procedure guideline threat vulnerability asset
confidentiality integrity authenticity accountability non repudiation encryption
decryption symmetric asymmetric public private certificate signature hash salt token
password biometric iris fingerprint voice social engineering phishing malware virus
worm trojan ransomware zero day patch hardening least privilege need to know
segregation duties preventive detective corrective internal external evidence follow up
logic gate gates wiring eniac edsac univac neumann offset vector polling default
connector media login private fact o factory
""".split())

# Multi-word undiacritized VN phrases
PHRASES = [
    "khong ", " duoc ", " nhieu ", " thiet bi", " nguoi dung", " he thong", " du lieu",
    " may tinh", " phan mem", " bo nho", " quan ly", " truy cap", " xu ly", " chuc nang",
    " muc tieu", " co ban", " chu yeu", " ket qua", " thuc hien", " dinh nghia",
    " giai thich", " vi du", " cong thuc", " rui ro", " an toan", " toan ven", " xac thuc",
    " ma hoa", " mat khau", " tai nguyen", " tien trinh", " hang doi", " thuat toan",
    " cau truc", " chat luong", " ke hoach", " chinh sach", " danh gia", " trien khai",
    " van hanh", " cai tien", " giam sat", " phat hien", " khoi phuc", " tuan thu",
    " doc lap", " noi bo", " ben ngoai", " khach hang", " dich vu", " to chuc",
    " doanh nghiep", " loi nhuan", " ton tai", " xa hoi", " ban quyen", " giay phep",
    " mien phi", " tra phi", " dong goi", " tich hop", " phan tan", " dong bo",
    " tuan tu", " song song", " noi tiep", " trung binh", " xac suat", " tan suat",
    " uu tien", " thap phan", " nhi phan", " bat phan", " chu so", " dia chi",
    " toan hang", " bieu thuc", " hau to", " de quy", " goi ham", " sap xep",
    " tim kiem", " so sanh", " do phuc tap", " chia de tri", " trung lap", " mau thuan",
    " san sang", " dang chay", " mat dien", " lap trinh", " chuong trinh", " kien truc",
    " thiet ke", " phat trien", " su dung", " hoat dong", " bieu dien", " don vi",
    " do tin cay", " hieu nang", " hieu qua", " hieu suat", " thoi gian", " thoi han",
    " bai toan", " the he", " linh kien", " ban dan", " thuong mai", " tin cay",
    " dieu khien", " cong nghiep", " gia dung", " khoa hoc", " ca nhan", " san xuat",
    " tiet kiem", " nang luong", " de dung", " kha nang", " suy luan", " con nguoi",
    " thu tu", " mo phong", " giai bai", " ban phim", " cam bien", " man hinh",
    " may in", " ghi nho", " truc tiep", " luu lau", " phep toan", " so hoc",
    " chi thi", " giai ma", " ra lenh", " con lai", " nhac truong", " ngoai vi",
    " rui ro", " ho tro", " chuyen biet", " tin hieu", " trang thai", " thong tin",
    " xay ra", " bat ngo", " tuong ung", " luy thua", " thap luc", " viet gon",
    " phan nguyen", " lien tiep", " lay du", " tu duoi", " lan luot", " ma bang",
    " bit rieng", " bai tinh", " chuyen co", " nhom bit", " xuat hien", " pho bien",
    " so am", " dao tat", " uu diem", " phep cong", " dung chung", " mach cong",
    " pham vi", " dau phay", " co dinh", " phan mu", " dinh tri", " sai so",
    " lam tron", " quoc te", " da ngon", " tieng nhat", " kiem tra", " loi le",
    " khi truyen", " phat hien", " manh hon", " thanh ghi", " ket noi", " quan trong",
    " lenh ke", " dang xu", " toan hang", " chu ky", " doc lenh", " thuc thi",
    " tan so", " dong ho", " thuc te", " phu thuoc", " o nho", " noi dung",
    " bien the", " ghi duoc", " mat do", " dinh ky", " dung lam", " nhanh hon",
    " khong can", " cham re", " can bang", " toc do", " chi phi", " ma phep",
    " che do", " thuong gap", " nam trong", " chua dia", " tro toi", " dia chi that",
    " co so", " so voi", " anh huong", " do dai", " so lan", " bo nho", " cong logic",
    " khoi xay", " to hop", " hien tai", " tuan tu", " nhi phan", " dich bit",
    " bieu thuc", " dinh luat", " chan ly", " don gian", " it cong", " re hon",
    " chong lan", " thoi gian", " lam giam", " hieu suat", " tan dung", " dia phuong",
    " tim thay", " phai xuong", " chinh sach", " ghi xuong", " anh xa", " phuc tap",
    " toi uu", " muc hieu", " trao doi", " giam tai", " song song", " chuong trinh",
    " khong gian", " lon hon", " vat ly", " dia tu", " mat dia", " dau tu",
    " thang hang", " doi dau", " quay toi", " dung luong", " so mat", " ghep nhieu",
    " du phong", " sao guong", " an toan", " hay hoi", " tin cay", " hieu dung",
    " phu hop", " phat hanh", " luu tru", " thuy dong", " chiu soc", " it on",
    " dat hon", " gioi han", " tuan tu", " chu yeu", " nhan chu", " to tram",
    " ngan hang", " ton cpu", " ngat khi", " may lon", " pho bien", " mo rong",
    " hinh anh", " khong day", " yeu cau", " tam dung", " hien tai", " su kien",
    " uu tien", " vector ngat", " tom tat", " on thi", " tieu de", " day du",
    " ngon ngu", " tieng viet", " thuan ngu", " sach goc", " nen tang", " de hieu",
    " cac chuong", " cau hinh", " lich su", " the he", " linh kien", " den dien",
    " tieu thu", " phat nhiet", " dan dao", " bai toan", " hien dai", " co che",
    " ban dan", " thuong mai", " tin cay", " tich hop", " hang tram", " xu ly",
    " mat do", " xuat hien", " dieu khien", " cong nghiep", " gia dung", " khoa hoc",
    " ca nhan", " dong goi", " he thong", " san xuat", " tiet kiem", " nang luong",
    " de dung", " kha nang", " suy luan", " con nguoi", " thu tu", " mo phong",
    " giai bai", " ban phim", " cam bien", " man hinh", " may in", " ghi nho",
    " truy cap", " truc tiep", " mat dien", " luu lau", " phep toan", " so hoc",
    " so sanh", " chi thi", " giai ma", " ra lenh", " con lai", " nhac truong",
    " ngoai vi", " chuc nang", " rui ro", " phat trien", " ho tro", " chuyen biet",
    " tin hieu", " trang thai", " thong tin", " xac suat", " xay ra", " bat ngo",
    " tuong ung", " luy thua", " chu so", " thap phan", " nhi phan", " bat phan",
    " thap luc", " viet gon", " phan nguyen", " lien tiep", " lay du", " tu duoi",
    " lan luot", " ma bang", " bit rieng", " bai tinh", " chuyen co", " nhom bit",
    " xuat hien", " pho bien", " so am", " dao tat", " uu diem", " phep cong",
    " dung chung", " mach cong", " pham vi", " dau phay", " co dinh", " phan mu",
    " dinh tri", " sai so", " lam tron", " quoc te", " da ngon", " tieng nhat",
    " kiem tra", " loi le", " khi truyen", " phat hien", " manh hon", " thanh ghi",
    " ket noi", " quan trong", " lenh ke", " dang xu", " toan hang", " chu ky",
    " doc lenh", " thuc thi", " tan so", " dong ho", " thuc te", " phu thuoc",
    " o nho", " noi dung", " bien the", " ghi duoc", " mat do", " dinh ky",
    " dung lam", " nhanh hon", " khong can", " cham re", " can bang", " toc do",
    " chi phi", " ma phep", " che do", " thuong gap", " nam trong", " chua dia",
    " tro toi", " dia chi that", " co so", " so voi", " anh huong", " do dai",
    " so lan", " bo nho", " cong logic", " khoi xay", " to hop", " hien tai",
    " tuan tu", " nhi phan", " dich bit", " bieu thuc", " dinh luat", " chan ly",
    " don gian", " it cong", " re hon", " chong lan", " thoi gian", " lam giam",
    " hieu suat", " tan dung", " dia phuong", " tim thay", " phai xuong",
    " chinh sach", " ghi xuong", " anh xa", " phuc tap", " toi uu", " muc hieu",
    " trao doi", " giam tai", " song song", " chuong trinh", " khong gian",
    " lon hon", " vat ly", " dia tu", " mat dia", " dau tu", " thang hang",
    " doi dau", " quay toi", " dung luong", " so mat", " ghep nhieu", " du phong",
    " sao guong", " an toan", " hay hoi", " tin cay", " hieu dung", " phu hop",
    " phat hanh", " luu tru", " thuy dong", " chiu soc", " it on", " dat hon",
    " gioi han", " tuan tu", " chu yeu", " nhan chu", " to tram", " ngan hang",
    " ton cpu", " ngat khi", " may lon", " pho bien", " mo rong", " hinh anh",
    " khong day", " yeu cau", " tam dung", " hien tai", " su kien", " uu tien",
    " vector ngat", " tom tat", " on thi", " tieu de", " day du", " ngon ngu",
    " tieng viet", " thuan ngu", " sach goc", " nen tang", " de hieu", " cac chuong",
    " cau hinh", " lich su", " the he", " linh kien", " den dien", " tieu thu",
    " phat nhiet", " dan dao", " bai toan", " hien dai", " co che", " ban dan",
    " thuong mai", " tin cay", " tich hop", " hang tram", " xu ly", " mat do",
    " xuat hien", " dieu khien", " cong nghiep", " gia dung", " khoa hoc", " ca nhan",
    " dong goi", " he thong", " san xuat", " tiet kiem", " nang luong", " de dung",
    " kha nang", " suy luan", " con nguoi", " thu tu", " mo phong", " giai bai",
    " ban phim", " cam bien", " man hinh", " may in", " ghi nho", " truy cap",
    " truc tiep", " mat dien", " luu lau", " phep toan", " so hoc", " so sanh",
    " chi thi", " giai ma", " ra lenh", " con lai", " nhac truong", " ngoai vi",
    " chuc nang", " rui ro", " phat trien", " ho tro", " chuyen biet", " tin hieu",
    " trang thai", " thong tin", " xac suat", " xay ra", " bat ngo", " tuong ung",
    " luy thua", " chu so", " thap phan", " nhi phan", " bat phan", " thap luc",
    " viet gon", " phan nguyen", " lien tiep", " lay du", " tu duoi", " lan luot",
    " ma bang", " bit rieng", " bai tinh", " chuyen co", " nhom bit", " xuat hien",
    " pho bien", " so am", " dao tat", " uu diem", " phep cong", " dung chung",
    " mach cong", " pham vi", " dau phay", " co dinh", " phan mu", " dinh tri",
    " sai so", " lam tron", " quoc te", " da ngon", " tieng nhat", " kiem tra",
    " loi le", " khi truyen", " phat hien", " manh hon", " thanh ghi", " ket noi",
    " quan trong", " lenh ke", " dang xu", " toan hang", " chu ky", " doc lenh",
    " thuc thi", " tan so", " dong ho", " thuc te", " phu thuoc", " o nho",
    " noi dung", " bien the", " ghi duoc", " mat do", " dinh ky", " dung lam",
    " nhanh hon", " khong can", " cham re", " can bang", " toc do", " chi phi",
    " ma phep", " che do", " thuong gap", " nam trong", " chua dia", " tro toi",
    " dia chi that", " co so", " so voi", " anh huong", " do dai", " so lan",
    " bo nho", " cong logic", " khoi xay", " to hop", " hien tai", " tuan tu",
    " nhi phan", " dich bit", " bieu thuc", " dinh luat", " chan ly", " don gian",
    " it cong", " re hon", " chong lan", " thoi gian", " lam giam", " hieu suat",
    " tan dung", " dia phuong", " tim thay", " phai xuong", " chinh sach",
    " ghi xuong", " anh xa", " phuc tap", " toi uu", " muc hieu", " trao doi",
    " giam tai", " song song", " chuong trinh", " khong gian", " lon hon", " vat ly",
    " dia tu", " mat dia", " dau tu", " thang hang", " doi dau", " quay toi",
    " dung luong", " so mat", " ghep nhieu", " du phong", " sao guong", " an toan",
    " hay hoi", " tin cay", " hieu dung", " phu hop", " phat hanh", " luu tru",
    " thuy dong", " chiu soc", " it on", " dat hon", " gioi han", " tuan tu",
    " chu yeu", " nhan chu", " to tram", " ngan hang", " ton cpu", " ngat khi",
    " may lon", " pho bien", " mo rong", " hinh anh", " khong day", " yeu cau",
    " tam dung", " hien tai", " su kien", " uu tien", " vector ngat",
]

# Single strong undiacritized tokens
STRONG = frozenset({
    "khong", "duoc", "nhieu", "thiet", "nguoi", "trong", "truoc", "duoi", "giua",
    "tren", "sau", "theo", "voi", "cua", "cho", "cac", "mot", "nay", "kia", "khi",
    "neu", "thi", "phai", "can", "nen", "van", "cung", "rat", "hon", "nhat", "hoac",
    "nhung", "nhu", "den", "vao", "len", "xuong", "ve", "tu", "de", "la", "va", "co",
    "se", "da", "dang", "bi", "het", "con", "lai", "moi", "loai", "phan", "muc",
    "quan", "ly", "he", "thong", "du", "lieu", "may", "tinh", "mem", "bo", "nho",
    "truy", "cap", "xu", "chuc", "nang", "tieu", "ban", "thuong", "chu", "yeu", "ket",
    "qua", "thuc", "hien", "dinh", "nghia", "giai", "thich", "vi", "du", "cong",
    "thuc", "rui", "ro", "an", "toan", "ven", "xac", "thuc", "ma", "hoa", "mat",
    "khau", "tai", "nguyen", "tien", "trinh", "hang", "doi", "thuat", "toan", "cau",
    "truc", "chat", "luong", "ke", "hoach", "chinh", "sach", "danh", "gia", "trien",
    "khai", "van", "hanh", "cai", "tien", "giam", "sat", "phat", "hien", "khoi",
    "phuc", "tuan", "thu", "doc", "lap", "noi", "ben", "ngoai", "khach", "dich", "vu",
    "to", "chuc", "doanh", "nghiep", "loi", "nhuan", "ton", "xa", "hoi", "quyen",
    "giay", "phep", "mien", "phi", "tra", "dong", "goi", "tich", "hop", "tan", "tuan",
    "tu", "song", "noi", "tiep", "trung", "binh", "suat", "uu", "tien", "thap", "nhi",
    "chu", "so", "dia", "chi", "toan", "hang", "bieu", "thuc", "hau", "to", "de",
    "quy", "goi", "ham", "sap", "xep", "tim", "kiem", "so", "sanh", "do", "phuc",
    "tap", "chia", "tri", "lap", "mau", "thuan", "san", "sang", "chay", "dien", "lap",
    "trinh", "chuong", "trinh", "kien", "truc", "thiet", "ke", "phat", "trien", "su",
    "dung", "hoat", "dong", "bieu", "dien", "don", "vi", "chinh", "phu", "ngoai",
    "nhat", "nhung", "hoac", "neu", "thi", "de", "la", "va", "cua", "cho", "tu", "ve",
    "ra", "vao", "len", "xuong", "nay", "khi", "cung", "van", "da", "dang", "se", "bi",
    "duoc", "khong", "can", "phai", "nen", "con", "lai", "moi", "cac", "mot", "nhieu",
    "it", "rat", "lon", "nho", "hon", "hay", "goi", "dung", "doc", "ghi", "xoa", "sua",
    "them", "giam", "tang", "chon", "tim", "lay", "dua", "gui", "nhan", "tao", "chia",
    "ket", "hop", "tich", "phan", "muc", "loai", "dang", "so", "ma", "bo", "he", "may",
    "man", "hinh", "bang", "cot", "hang", "nut", "cay", "mang", "danh", "gia", "tri",
    "ty", "le", "do", "luc", "lan", "buoc", "giai", "thich", "dinh", "nghia", "vi",
    "du", "cong", "thuc", "diem", "hay", "ra", "de", "on", "thi", "tom", "tat", "chi",
    "tiet", "noi", "dung", "ngon", "ngu", "tieng", "viet", "thuan", "ngu", "sach",
    "goc", "chuong", "phan", "muc", "tieu", "de", "ban", "nay", "day", "du", "khong",
    "chi", "tieu", "de", "moi", "muc", "dinh", "nghia", "giai", "thich", "vi", "du",
    "cong", "thuc", "diem", "hay", "ra", "de", "nen", "tang", "hieu", "cac", "chuong",
    "sau", "cau", "hinh", "co", "ban", "may", "tinh", "lich", "su", "nam", "don", "vi",
    "chinh", "bieu", "dien", "du", "lieu", "trong", "may", "tinh", "cong", "nghe",
    "tang", "toc", "bo", "nho", "phu", "the", "he", "linh", "kien", "chu", "yeu",
    "duoc", "dung", "den", "dien", "tu", "tieu", "thu", "dien", "rat", "lon", "phat",
    "nhiet", "manh", "tinh", "toan", "dan", "dao", "doi", "bai", "toan", "mot", "so",
    "nguoi", "khong", "coi", "do", "la", "may", "tinh", "theo", "nghia", "hien", "dai",
    "dung", "co", "che", "chuong", "trinh", "luu", "trong", "may", "roi", "chay", "may",
    "theo", "kien", "truc", "nay", "goi", "la", "ban", "dan", "thuong", "mai", "som",
    "nho", "it", "hong", "hon", "den", "dien", "tu", "may", "gon", "va", "tin", "cay",
    "hon", "tich", "hop", "hang", "tram", "tren", "chip", "dung", "duoc", "nhieu",
    "loai", "xu", "ly", "mat", "do", "cao", "hon", "xuat", "hien", "may", "dieu",
    "khien", "cong", "nghiep", "cho", "thiet", "bi", "gia", "dung", "cho", "tinh",
    "khoa", "hoc", "ca", "nhan", "chuyen", "tu", "dong", "goi", "ca", "he", "thong",
    "vao", "xu", "huong", "hien", "dai", "co", "the", "lap", "trinh", "logic", "sau",
    "khi", "san", "xuat", "tiet", "kiem", "nang", "luong", "may", "de", "dung", "hon",
    "co", "kha", "nang", "suy", "luan", "gan", "con", "nguoi", "hon", "nho", "thu",
    "tu", "du", "may", "tinh", "co", "nhieu", "loai", "cau", "hinh", "co", "ban", "deu",
    "gom", "don", "vi", "chinh", "mo", "phong", "cach", "con", "nguoi", "giai", "bai",
    "toan", "doc", "du", "lieu", "can", "xu", "ly", "ban", "phim", "chuot", "cam",
    "bien", "xuat", "ket", "qua", "dang", "nguoi", "doc", "duoc", "man", "hinh", "may",
    "in", "ghi", "nho", "du", "lieu", "co", "loai", "truy", "cap", "truc", "tiep", "tu",
    "mat", "khi", "mat", "dien", "luu", "lau", "thuc", "hien", "phep", "toan", "so",
    "hoc", "va", "logic", "so", "sanh", "theo", "chi", "thi", "cua", "giai", "ma",
    "lenh", "ra", "lenh", "cho", "don", "vi", "con", "lai", "la", "nhac", "truong",
    "cua", "may", "thiet", "bi", "ngoai", "goi", "la", "chuc", "nang", "dong", "goi",
    "vao", "tich", "hop", "ca", "he", "thong", "ke", "ca", "bo", "nho", "vao", "chip",
    "nhanh", "it", "dien", "nhung", "rui", "ro", "phat", "trien", "cao", "nhieu",
    "chip", "trong", "con", "tich", "hop", "ca", "ho", "tro", "hoac", "chi", "lam",
    "loai", "xu", "ly", "chuyen", "biet", "khac", "dua", "vao", "hieu", "la", "cong",
    "lay", "tinh", "ghi", "vao", "hien", "du", "lieu", "trong", "may", "duoc", "bieu",
    "dien", "bang", "tin", "hieu", "dien", "chi", "co", "trang", "thai", "gan", "don",
    "vi", "nho", "nhat", "la", "don", "vi", "xu", "ly", "cua", "may", "tuy", "kien",
    "truc", "cang", "nhieu", "lan", "xu", "ly", "cang", "nhieu", "thong", "tin",
    "thuong", "nhanh", "hon", "luong", "thong", "tin", "bieu", "dien", "duoc", "trang",
    "thai", "loai", "ly", "thuyet", "thong", "tin", "su", "kien", "cang", "it", "xac",
    "suat", "xay", "ra", "luong", "thong", "tin", "mang", "lai", "cang", "lon", "muc",
    "bat", "ngo", "xac", "suat", "tuong", "ung", "lon", "nho", "trong", "may", "tinh",
    "thuong", "de", "bai", "hay", "hoi", "dung", "moi", "hang", "la", "luy", "thua",
    "cua", "dung", "chu", "so", "den", "thi", "nho", "chi", "vi", "du", "thap", "phan",
    "bat", "phan", "va", "thap", "luc", "phan", "de", "viet", "gon", "nhi", "phan",
    "chu", "so", "dung", "chuyen", "thap", "phan", "phan", "nguyen", "chia", "lien",
    "tiep", "cho", "lay", "du", "tu", "duoi", "len", "phan", "thap", "phan", "nhan",
    "lay", "phan", "nguyen", "lan", "luot", "moi", "chu", "so", "thap", "phan", "ma",
    "bang", "bit", "rieng", "khong", "phai", "nhi", "phan", "thuan", "cua", "ca", "so",
    "bai", "tinh", "chuyen", "co", "so", "doi", "bang", "nhom", "bit", "xuat", "hien",
    "rat", "nhieu", "so", "nguyen", "co", "dau", "thuong", "dung", "pho", "bien", "nhat",
    "cua", "so", "am", "dao", "tat", "ca", "bit", "roi", "uu", "diem", "phep", "cong",
    "tru", "dung", "chung", "mach", "cong", "chi", "co", "so", "pham", "vi", "so",
    "nguyen", "dau", "phay", "co", "dinh", "gom", "dau", "phan", "mu", "phan", "dinh",
    "tri", "bieu", "dien", "so", "rat", "lon", "nho", "co", "the", "bi", "va", "sai",
    "so", "lam", "tron", "pho", "bien", "quoc", "te", "may", "ho", "tro", "da", "ngon",
    "ngu", "cho", "tieng", "nhat", "them", "bit", "de", "kiem", "tra", "loi", "le",
    "chan", "khi", "truyen", "luu", "dung", "phat", "hien", "loi", "manh", "hon", "xem",
    "them", "gom", "tap", "thanh", "ghi", "ket", "noi", "qua", "quan", "trong", "dia",
    "chi", "lenh", "ke", "lenh", "dang", "xu", "ly", "toan", "hang", "ket", "qua", "so",
    "sanh", "chu", "ky", "lenh", "co", "ban", "doc", "lenh", "giai", "ma", "thuc", "thi",
    "tan", "so", "dong", "ho", "cao", "hon", "thuong", "xu", "ly", "nhieu", "chu", "ky",
    "hon", "giay", "nhung", "hieu", "nang", "thuc", "te", "con", "phu", "thuoc", "moi",
    "o", "nho", "co", "dia", "chi", "va", "noi", "dung", "truy", "cap", "bang", "dia",
    "chi", "doc", "ghi", "giu", "noi", "dung", "khi", "mat", "dien", "chu", "yeu", "doc",
    "co", "bien", "the", "ghi", "duoc", "mat", "do", "cao", "can", "dinh", "ky", "dung",
    "lam", "nhanh", "hon", "dat", "khong", "can", "dung", "lam", "nhanh", "dat", "cham",
    "re", "muc", "tieu", "can", "bang", "toc", "do", "va", "chi", "phi", "lenh", "gom",
    "ma", "phep", "toan", "toan", "hang", "dia", "chi", "cac", "che", "do", "dia", "chi",
    "hoa", "thuong", "gap", "toan", "hang", "nam", "trong", "lenh", "lenh", "chua", "dia",
    "chi", "o", "nho", "lenh", "tro", "toi", "cho", "chua", "dia", "chi", "that", "dia",
    "chi", "co", "so", "offset", "so", "voi", "so", "dia", "chi", "trong", "lenh", "anh",
    "huong", "do", "dai", "lenh", "va", "so", "lan", "truy", "cap", "bo", "nho", "cong",
    "logic", "co", "ban", "moi", "cong", "la", "khoi", "xay", "dung", "va", "mach", "to",
    "hop", "ra", "chi", "phu", "thuoc", "vao", "vao", "hien", "tai", "mach", "tuan", "tu",
    "co", "nho", "trang", "thai", "cong", "nhi", "phan", "dich", "bit", "nhan", "chia",
    "so", "sanh", "bieu", "thuc", "dinh", "luat", "bang", "chan", "ly", "dung", "don",
    "gian", "hoa", "logic", "it", "cong", "nhanh", "re", "hon", "chia", "xu", "ly", "lenh",
    "thanh", "nhieu", "de", "nhieu", "lenh", "chong", "lan", "nhau", "theo", "thoi", "gian",
    "lam", "giam", "hieu", "suat", "bo", "nho", "nhanh", "giua", "va", "tan", "dung",
    "tinh", "dia", "phuong", "tim", "thay", "phai", "xuong", "chinh", "sach", "ghi", "ghi",
    "xuong", "luon", "ghi", "xuong", "sau", "anh", "xa", "lenh", "don", "gian", "de", "lenh",
    "phuc", "tap", "manh", "nhung", "kho", "toi", "uu", "muc", "hieu", "thiet", "bi",
    "trao", "doi", "truc", "tiep", "voi", "khong", "qua", "tung", "giam", "tai", "chia",
    "de", "truy", "cap", "song", "song", "chuong", "trinh", "thay", "khong", "gian", "dia",
    "chi", "lon", "hon", "vat", "ly", "dia", "tu", "mat", "dia", "dau", "tu", "ranh", "cac",
    "thang", "hang", "tren", "cac", "mat", "doi", "dau", "cho", "quay", "toi", "dung",
    "luong", "so", "mat", "so", "ghep", "nhieu", "dia", "nhanh", "khong", "du", "phong",
    "sao", "guong", "an", "toan", "can", "bang", "parity", "kep", "de", "hay", "hoi", "toc",
    "do", "do", "tin", "cay", "dung", "luong", "hieu", "dung", "doc", "ghi", "bang", "phu",
    "hop", "phat", "hanh", "luu", "tru", "thuy", "dong", "truy", "cap", "nhanh", "chiu",
    "soc", "it", "on", "thuong", "dat", "hon", "theo", "co", "gioi", "han", "so", "lan",
    "ghi", "re", "dung", "luong", "lon", "tuan", "tu", "chu", "yeu", "nhan", "chu", "to",
    "tram", "sec", "ngan", "hang", "kim", "phun", "cho", "polling", "don", "gian", "nhung",
    "ton", "thiet", "bi", "ngat", "khi", "xong", "may", "lon", "pho", "bien", "o", "dia",
    "card", "mo", "rong", "toc", "do", "cao", "hinh", "anh", "khong", "day", "tin", "hieu",
    "yeu", "cau", "tam", "dung", "viec", "hien", "tai", "de", "xu", "ly", "su", "kien",
    "co", "muc", "uu", "tien", "va", "vector", "ngat", "chuong", "nay", "phan", "loai",
    "he", "thong", "xu", "ly", "thong", "tin", "danh", "gia", "hieu", "nang", "do", "tin",
    "cay", "giao", "dien", "nguoi", "may", "va", "dua", "loat", "chi", "thi", "may",
    "chay", "den", "het", "nguoi", "khong", "can", "thiep", "giua", "chung", "nguoi", "va",
    "may", "trao", "doi", "tung", "buoc", "qua", "man", "hinh", "lenh", "can", "tot", "de",
    "nang", "nang", "suat", "nguoi", "dung", "gom", "du", "lieu", "roi", "xu", "ly", "luc",
    "vao", "thoi", "diem", "dinh", "tinh", "luong", "cuoi", "ngay", "khong", "can", "phan",
    "hoi", "tuc", "thi", "mang", "du", "lieu", "ve", "trung", "tam", "gui", "tu", "xa",
    "tu", "thao", "tac", "nhap", "chay", "cap", "nhat", "theo", "giao", "dich", "can",
    "het", "hoac", "khong", "khong", "mau", "thuan", "khong", "xen", "lan", "sai", "da",
    "thi", "con", "sau", "su", "co", "co", "yeu", "cau", "den", "la", "xu", "ly", "ngay",
    "tre", "han", "gay", "hau", "qua", "nghiem", "trong", "tui", "khi", "dieu", "khien",
    "an", "toan", "tre", "han", "khong", "gay", "chet", "nguoi", "dat", "cho", "xu", "ly",
    "tap", "trung", "may", "trung", "tam", "de", "quan", "tri", "nhung", "de", "va", "kho",
    "mo", "rong", "chia", "viec", "tren", "nhieu", "may", "can", "dong", "bo", "mang",
    "bao", "mat", "giao", "thuc", "yeu", "cau", "cung", "cap", "dich", "vu", "noi", "tiep",
    "ca", "he", "thong", "chi", "khi", "moi", "thanh", "phan", "do", "tin", "cay", "giam",
    "khi", "ghep", "them", "song", "song", "he", "thong", "neu", "it", "nhat", "nhanh",
    "tang", "do", "tin", "cay", "ton", "tai", "nguyen", "may", "du", "phong", "dang",
    "chay", "san", "bat", "khi", "can", "khi", "loi", "thi", "ve", "trang", "thai", "an",
    "toan", "giam", "chuc", "nang", "nhung", "van", "chay", "duoc", "phan", "con", "lai",
    "chiu", "loi", "van", "hoat", "dong", "dung", "thoi", "gian", "tu", "gui", "yeu", "cau",
    "den", "nhan", "tra", "loi", "quan", "trong", "thoi", "gian", "tu", "nop", "den", "nhan",
    "toan", "bo", "ket", "qua", "quan", "trong", "so", "viec", "giao", "dich", "hoan",
    "thanh", "tren", "don", "vi", "thoi", "gian", "trieu", "lenh", "may", "giay", "so",
    "sanh", "tho", "phu", "thuoc", "tap", "lenh", "phep", "toan", "thuc", "phan", "khong",
    "song", "song", "hoa", "duoc", "se", "gioi", "han", "toc", "do", "tang", "khi", "them",
    "thoi", "gian", "trung", "binh", "giua", "lan", "hong", "cang", "lon", "cang", "tot",
    "thoi", "gian", "trung", "binh", "sua", "xong", "cang", "nho", "cang", "tot", "ty", "le",
    "hong", "nhan", "cac", "dau", "doi", "hong", "som", "on", "dinh", "cuoi", "doi", "hao",
    "mon", "hieu", "nang", "tren", "chi", "phi", "tong", "chi", "phi", "so", "huu", "mua",
    "van", "hanh", "bao", "tri", "dien", "nhan", "su", "can", "can", "nhac", "loi", "nhuan",
    "von", "dau", "tu", "thiet", "ke", "de", "nguoi", "dung", "hieu", "va", "thao", "tac",
    "de", "it", "loi", "hieu", "qua", "hieu", "suat", "hai", "long", "do", "hoa", "dong",
    "lenh", "nguyen", "tac", "giam", "loi", "nguoi", "dung", "mau", "sac", "do", "tuong",
    "phan", "bo", "cuc", "man", "hinh", "giam", "moi", "mat", "ho", "tro", "nguoi", "khuyet",
    "tat", "nhom", "thong", "tin", "hop", "ly", "default", "an", "toan", "thong", "bao",
    "loi", "ro", "rang", "ket", "hop", "nen", "mat", "mat", "file", "nho", "mat", "phan",
    "chat", "luong", "giu", "nguyen", "phat", "trong", "khi", "tai", "thoai", "tren", "ung",
    "dung", "dao", "tao", "giai", "tri", "te", "hoi", "nghi", "truyen", "hinh", "lop",
    "pham", "vi", "rong", "dia", "ly", "thanh", "pho", "ca", "nhan", "noi", "bo", "mo",
    "rong", "doi", "tac", "toan", "cau", "chia", "se", "chia", "port", "giam", "dinh",
    "tuyen", "giua", "mang", "khac", "giao", "thuc", "ky", "thuat", "truyen", "va", "dich",
    "vu", "tan", "so", "thoi", "gian", "buoc", "song", "quang", "kenh", "co", "dinh", "giong",
    "dien", "thoai", "chia", "goi", "xa", "bang", "thong", "rong", "it", "nhieu", "song",
    "vo", "tuyen", "vi", "song", "ve", "tinh", "phat", "hien", "loi", "sua", "loi", "dieu",
    "khien", "truyen", "dong", "bo", "hoa", "khung", "truy", "cap", "duong", "truyen", "co",
    "dien", "dich", "vu", "di", "dong", "uu", "tien", "luu", "luong", "hoc", "thuoc", "dich",
    "vu", "ung", "dung", "cho", "chuong", "trinh", "truyen", "file", "truy", "van", "tu",
    "xa", "ma", "hoa", "nen", "chuyen", "doi", "cu", "phap", "du", "lieu", "quan", "ly",
    "phien", "diem", "dong", "bo", "quyen", "noi", "truyen", "tin", "cay", "dia", "chi",
    "logic", "chuyen", "tiep", "goi", "tin", "cay", "giua", "nut", "ke", "bit", "dien", "ap",
    "day", "connector", "toc", "do", "xung", "dung", "dich", "vu", "lop", "duoi", "giua",
    "cung", "lop", "hai", "dau", "mut", "la", "de", "facto", "cua", "ten", "mien", "cap",
    "phat", "dong", "dinh", "kem", "da", "phuong", "tien", "quan", "tri", "mang", "login",
    "tu", "xa", "an", "toan", "hon", "dong", "bo", "gio", "media", "thoi", "gian", "thuc",
    "huong", "ket", "noi", "tin", "cay", "kiem", "soat", "luong", "phu", "hop", "khong",
    "ket", "noi", "nhe", "phu", "hop", "khi", "chap", "nhan", "mat", "goi", "vi", "du",
    "private", "bien", "dich", "dia", "chi", "bao", "loi", "phan", "doan", "mang", "logic",
    "dung", "bao", "mat", "mang", "cac", "mang", "tao", "nen", "toi", "uu", "va", "bao",
    "mat", "giam", "sat", "lap", "ke", "hoach", "an", "ninh", "thong", "tin", "cong",
    "nghe", "quan", "tri", "cot", "loi", "moi", "de", "thi", "theo", "la", "duy", "tri",
    "va", "co", "the", "them", "chi", "moi", "doc", "su", "dung", "thong", "tin", "dung",
    "va", "day", "du", "khong", "bi", "sua", "trai", "phep", "dung", "luc", "can", "van",
    "truy", "cap", "duoc", "dung", "la", "truy", "vet", "hanh", "vi", "ve", "dung", "chu",
    "the", "khong", "choi", "bo", "duoc", "hanh", "dong", "da", "thuc", "hien", "hanh",
    "vi", "on", "dinh", "dung", "nhu", "thiet", "ke", "quan", "ly", "doi", "tuong", "tai",
    "san", "can", "bao", "ve", "moi", "de", "doa", "diem", "yeu", "co", "the", "bi", "tan",
    "dung", "rui", "ro", "ket", "hop", "ba", "yeu", "to", "bon", "chuc", "nang", "ngan",
    "phat", "hien", "han", "che", "thiet", "hai", "khoi", "phuc", "tai", "san", "thong",
    "tin", "huu", "hinh", "may", "phan", "mem", "tai", "lieu", "va", "vo", "hinh", "du",
    "lieu", "khach", "hang", "uy", "tin", "moi", "de", "doa", "mang", "nghe", "len", "sua",
    "doi", "gia", "mao",
})


def scan_file(path: Path) -> tuple[Counter, list[tuple[int, str, str]]]:
    text = path.read_text(encoding="utf-8", errors="ignore")
    lines = text.splitlines()
    ctr: Counter = Counter()
    samples: list[tuple[int, str, str]] = []

    for li, line in enumerate(lines, 1):
        if "http://" in line or "https://" in line:
            continue
        low_line = f" {line.lower()} "

        for phr in PHRASES:
            if phr in low_line:
                key = phr.strip()
                ctr[key] += 1
                if len(samples) < 300:
                    samples.append((li, key, line.strip()[:180]))

        for m in re.finditer(r"(?<![A-Za-zÀ-ỹ])([A-Za-z]{2,})(?![A-Za-zÀ-ỹ])", line):
            w = m.group(1)
            low = w.lower()
            if low in EN:
                continue
            if low in STRONG:
                ctr[low] += 1
                if len(samples) < 400:
                    samples.append((li, low, line.strip()[:180]))

    return ctr, samples


def main() -> None:
    files = [
        ROOT / "TOM_TAT_ON_THI_FE_VOL1_VOL2.txt",
        ROOT / "js" / "data-study.js",
        ROOT / "js" / "app.js",
        ROOT / "index.html",
        ROOT / "BO_300_CAU_ON_THI.txt",
        ROOT / "BAO_CAO_DOI_CHIEU.txt",
        ROOT / "README.md",
    ]

    report: list[str] = []
    report.append("BÁO CÁO QUÉT TIẾNG VIỆT THIẾU DẤU")
    report.append("=" * 60)
    grand: Counter = Counter()
    all_samples: list[tuple[str, int, str, str]] = []

    for fp in files:
        if not fp.exists():
            continue
        ctr, samples = scan_file(fp)
        grand.update(ctr)
        report.append("")
        report.append(f"## {fp.name}")
        report.append(f"- Lượt: {sum(ctr.values())} | loại: {len(ctr)}")
        if ctr:
            for w, c in ctr.most_common(40):
                report.append(f"    {c:4d}  {w}")
        else:
            report.append("    (không phát hiện token tiếng Việt không dấu)")
        for li, tok, line in samples[:15]:
            all_samples.append((fp.name, li, tok, line))

    report.append("")
    report.append("## TỔNG HỢP TOP 100")
    if grand:
        for w, c in grand.most_common(100):
            report.append(f"{c:5d}  {w}")
    else:
        report.append("(KHÔNG CÒN token tiếng Việt không dấu chắc chắn)")

    report.append("")
    report.append("## MẪU DÒNG")
    for name, li, tok, line in all_samples[:50]:
        report.append(f"- {name}:{li} [{tok}] {line}")

    out = ROOT / "_scan_vi_report.txt"
    out.write_text("\n".join(report) + "\n", encoding="utf-8")
    print(f"Wrote {out}")
    print(f"Unique: {len(grand)} | Hits: {sum(grand.values())}")
    for w, c in grand.most_common(30):
        print(f"  {c:4d} {w}")


if __name__ == "__main__":
    main()
