# Example J5c — True/False (statement sai → chỉ chỗ sai)

- **Rule:** `PROMPT_GIAI_THICH_TRAC_NGHIEM.md` → **J5c — True / False**
- **Nguồn data:** `quiz/data/fe.json` · id **417** · task `fuexam` · num **9** · ans **A**
- **Mục đích:** khi đáp án là **False**, giải thích phải **mổ statement**: chỗ nào gán nhầm, đúng ra là khái niệm gì.

---

## Đề (EN)

> The following statement is true/ false about CRM?  
> Customer Relationship Management (CRM) is a cross-functional enterprise system driven by an integrated suite of software modules that supports the **basic internal business processes** of a company. CRM gives a company an integrated real-time view of its core business processes such as **production, order processing, and inventory management**, tied together by CRM applications software and a common database… CRM systems **track business resources** (such as **cash, raw materials, and production capacity**) and the status of commitments… (**employee payroll**), no matter which department… CRM facilitates information flow between all business functions…

**Options**

| Mã | Gốc | Ghi chú |
|----|-----|---------|
| **A** | False | ✅ Đáp án đúng |
| **B** | True | Statement mô tả ERP gán cho CRM |

---

## Vì sao không viết “giải thích MCQ thường”?

| Sai (anti-pattern) | Đúng (J5c — False) |
|--------------------|---------------------|
| “Đáp án A vì bank ghi A.” | Chỉ **cụm/mệnh đề** trong đoạn bị sai. |
| “CRM không phải ERP.” (quá chung) | Liệt kê: *internal processes*, *production/inventory*, *cash/raw materials/capacity*, *payroll* → đó là **ERP**. |
| whyWrong[B] = “không khớp đáp án A” | True = **chấp nhận** đoạn mô tả → bỏ sót chỗ nhầm CRM↔ERP. |

---

## Giải thích chuẩn (map UI)

### concept — Đây là gì?

```
• CRM (Customer Relationship Management): hệ hướng **khách hàng** — sales, marketing, service, pipeline, ticket CS…
• Không phải suite back-office “basic internal” (sản xuất, tồn kho, cash, nguyên liệu, payroll) — đó là **ERP**.
```

### whyCorrect — Vì sao đúng? (nhánh **False**)

```
• Chỗ sai trong statement:
  – Gán CRM = hỗ trợ basic **internal** business processes (giống ERP).
  – Nêu production / inventory / track cash–raw materials–production capacity / payroll cross-department.
• Vì sao sai: các ý trên là mô tả **ERP** (Enterprise Resource Planning), không phải CRM.
• CRM đúng nghĩa: quan hệ & tương tác **khách hàng** (customer-facing), không phải điều phối tài nguyên nội bộ.
• → Phát biểu **sai** → đáp án **False**.
```

### whyWrong — B. True

```
• Là gì? True = khẳng định toàn bộ đoạn mô tả CRM là đúng.
• Dùng để làm gì? Chọn khi statement khớp bản chất khái niệm.
• Vì sao sai? Đoạn đang mô tả ERP (internal resources) gán nhầm cho CRM — chọn True là bỏ sót chỗ tráo khái niệm.
```

### memoryTip

```
• CRM = khách hàng (sales/marketing/service).
• ERP = tài nguyên & quy trình nội bộ (SX, kho, tiền, payroll…).
```

### intent

```
• J5c — True/False · phân biệt CRM vs ERP qua statement dài.
```

---

## Checklist nhanh khi gặp T/F khác

1. Answer = **True**? → `whyCorrect` khẳng định statement **khớp** X (không bịa lỗi).  
2. Answer = **False**? → gạch **≥ 1 mệnh đề sai** + khái niệm đúng (nếu bị tráo).  
3. `concept` luôn định nghĩa **X đúng**, không copy nguyên statement.  
4. Cấm whyCorrect chỉ: “Vì đáp án là False/True.”

---

## Liên kết

| File | Vai trò |
|------|---------|
| `quiz/promt/PROMPT_GIAI_THICH_TRAC_NGHIEM.md` | Rule J5c chính thức |
| `quiz/promt/EXAMPLE_TRUE_FALSE_CRM.json` | Cùng example dạng machine-readable |
| `quiz/data/fe.json` id 417 | Câu trong bank |
