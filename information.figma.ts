import figma, { html } from "@figma/code-connect/html"

/**
 * Information — Code Connect (HTML/CSS)
 *
 * Figma node: 50202:37363  (file: f1KMUlq8v1ahFkIcJHl3qm)
 *
 * Properties:
 *   layout : compact | wide   → variant. Markup is identical; the responsive
 *                               layout is handled entirely by CSS media queries,
 *                               so we don't branch on it here.
 *   align  : left | center    → variant. Adds the `--center` item modifier.
 *   paragraph, copy 1-4, disclaimer 1-4, link → Boolean toggles.
 *
 * IMPORTANT: every content prop is a Boolean in Figma, so we render static markup
 * on `true`. Do NOT wrap these in figma.string() — a single Figma property cannot
 * be both Boolean and String, which is exactly what produced the "Error!" badge in
 * the Inspect panel previously.
 */

const FIGMA_URL =
  "https://www.figma.com/design/f1KMUlq8v1ahFkIcJHl3qm/%F0%9F%A6%8B-Promotion-design-system-v2.0?node-id=50202-37363"

const copyRow = (label: string, code: string) =>
  html`<p class="pds-information__copy-row">
          <span>${label}</span>
          <a class="pds-information__link" href="#">${code}</a>
          <button class="pds-information__copy" type="button" aria-label="할인 코드 복사">📋</button>
        </p>`

const disclaimer = html`<p class="pds-disclaimer"><span class="pds-disclaimer__icon" aria-hidden="true">*</span>부가 설명을 입력해 주세요.</p>`

figma.connect(FIGMA_URL, {
  props: {
    // align variant → item modifier class (leading space keeps the base class intact)
    itemModifier: figma.enum("align", {
      left: "",
      center: " pds-information__item--center",
    }),

    paragraph: figma.boolean("paragraph", {
      true: html`<p>본문 내용을 입력해 주세요.</p>`,
      false: html``,
    }),

    copy1: figma.boolean("copy 1", { true: copyRow("Seattle", "SEA5OFF"), false: html`` }),
    copy2: figma.boolean("copy 2", { true: copyRow("San Francisco", "SFO5OFF"), false: html`` }),
    copy3: figma.boolean("copy 3", { true: copyRow("Los Angeles", "LAX5OFF"), false: html`` }),
    copy4: figma.boolean("copy 4", { true: copyRow("New York", "JFK5OFF"), false: html`` }),

    disclaimer1: figma.boolean("disclaimer 1", { true: disclaimer, false: html`` }),
    disclaimer2: figma.boolean("disclaimer 2", { true: disclaimer, false: html`` }),
    disclaimer3: figma.boolean("disclaimer 3", { true: disclaimer, false: html`` }),
    disclaimer4: figma.boolean("disclaimer 4", { true: disclaimer, false: html`` }),

    link: figma.boolean("link", {
      true: html`<a class="pds-information__link" href="#" target="_blank" rel="noopener">자세히 보기</a>`,
      false: html``,
    }),
  },
  // Styles live in information.css (import it once in your page/bundle).
  example: (props) => html`
<!-- Information : S -->
<div class="pds-information">
  <ul class="pds-information__list">
    <li class="pds-information__item${props.itemModifier}">
      <div class="pds-information__title">Title</div>
      <div class="pds-information__paragraph">
        ${props.paragraph}
        ${props.copy1}
        ${props.copy2}
        ${props.copy3}
        ${props.copy4}
        ${props.disclaimer1}
        ${props.disclaimer2}
        ${props.disclaimer3}
        ${props.disclaimer4}
        ${props.link}
      </div>
    </li>
  </ul>
</div>
<!-- Information : E -->`,
})
