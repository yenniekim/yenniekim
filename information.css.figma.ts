import figma, { html } from "@figma/code-connect/html"

const FIGMA_URL =
  "https://www.figma.com/design/f1KMUlq8v1ahFkIcJHl3qm/%F0%9F%A6%8B-Promotion-design-system-v2.0?node-id=50202-37363"

/**
 * Information — CSS Code Connect
 *
 * Figma variant props:
 *   layout : compact | wide
 *   align  : left | center
 *   paragraph, disclaimer 1-4, copy 1-4, link : boolean
 *
 * NOTE: `paragraph` is a Boolean toggle in Figma — render static markup on `true`.
 *       Do NOT call figma.string("paragraph"); the same property can't be both
 *       Boolean and String, which is what produced the "Error!" in Inspect.
 */

const paragraph = figma.boolean("paragraph", {
  true: html`<p>본문 내용을 입력해 주세요.</p>`,
  false: html``,
})

const disclaimer1 = figma.boolean("disclaimer 1", {
  true: html`<p class="pds-disclaimer"><span class="pds-disclaimer__icon" aria-hidden="true">*</span>부가 설명을 입력해 주세요.</p>`,
  false: html``,
})

const link = figma.boolean("link", {
  true: html`<a class="pds-information__link" href="#">자세히 보기</a>`,
  false: html``,
})

/* ─────────────────────────────────────────────
   Wide + Left (Desktop default)
   ───────────────────────────────────────────── */
figma.connect(FIGMA_URL, {
  variant: { layout: "wide", align: "left" },
  props: { paragraph, disclaimer1, link },
  example: (props) => html`
<!-- Information : S -->
<div class="pds-information">
  <ul class="pds-information__list">
    <li class="pds-information__item">
      <div class="pds-information__title">Title</div>
      <div class="pds-information__paragraph">
        ${props.paragraph}
        ${props.disclaimer1}
        ${props.link}
      </div>
    </li>
  </ul>
</div>
<!-- Information : E -->`,
})

/* ─────────────────────────────────────────────
   Wide + Center
   ───────────────────────────────────────────── */
figma.connect(FIGMA_URL, {
  variant: { layout: "wide", align: "center" },
  props: { paragraph, disclaimer1, link },
  example: (props) => html`
<!-- Information : S -->
<div class="pds-information">
  <ul class="pds-information__list">
    <li class="pds-information__item pds-information__item--center">
      <div class="pds-information__title">Title</div>
      <div class="pds-information__paragraph">
        ${props.paragraph}
        ${props.disclaimer1}
        ${props.link}
      </div>
    </li>
  </ul>
</div>
<!-- Information : E -->`,
})

/* ─────────────────────────────────────────────
   Compact + Left (Tablet / Mobile)
   ───────────────────────────────────────────── */
figma.connect(FIGMA_URL, {
  variant: { layout: "compact", align: "left" },
  props: { paragraph, disclaimer1, link },
  example: (props) => html`
<!-- Information (compact) : S -->
<div class="pds-information">
  <ul class="pds-information__list">
    <li class="pds-information__item">
      <div class="pds-information__title">Title</div>
      <div class="pds-information__paragraph">
        ${props.paragraph}
        ${props.disclaimer1}
        ${props.link}
      </div>
    </li>
  </ul>
</div>
<!-- Information (compact) : E -->`,
})

/* ─────────────────────────────────────────────
   Compact + Center
   ───────────────────────────────────────────── */
figma.connect(FIGMA_URL, {
  variant: { layout: "compact", align: "center" },
  props: { paragraph, disclaimer1, link },
  example: (props) => html`
<!-- Information (compact, center) : S -->
<div class="pds-information">
  <ul class="pds-information__list">
    <li class="pds-information__item pds-information__item--center">
      <div class="pds-information__title">Title</div>
      <div class="pds-information__paragraph">
        ${props.paragraph}
        ${props.disclaimer1}
        ${props.link}
      </div>
    </li>
  </ul>
</div>
<!-- Information (compact, center) : E -->`,
})
