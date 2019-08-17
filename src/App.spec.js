import { render, fireEvent } from "@testing-library/vue";
import App from "./App.vue";

describe("カウンター", () => {
  const { getByText } = render(App);

  it("カウンターの初期値が0であること", async () => {
    getByText("Times clicked: 0");
  });

  it("インクリメントボタン押下で1カウントアップすること", async () => {
    const button = getByText("increment");
    await fireEvent.click(button);
    await fireEvent.click(button);
    getByText("Times clicked: 2");
  });

  it("デクリメントボタン押下で1カウントダウンすること", async () => {
    const button = getByText("decrement");
    await fireEvent.click(button);
    await fireEvent.click(button);
    getByText("Times clicked: 0");
  });
});
