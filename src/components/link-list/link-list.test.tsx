import { render, screen } from "@testing-library/react";
import { LinkList } from ".";

describe("LinkList", () => {
  it("renders the title and logo", () => {
    const mockTitle = "hi";
    const mockLinks = [
      {
        text: "Link 1",
        url: "https://example.com/1",
      },
      {
        text: "Link 2",
        url: "https://example.com/2",
      },
      {
        text: "Link 3",
        url: "https://example.com/3",
      },
    ];

    render(<LinkList title={mockTitle} links={mockLinks} />);
    expect(screen.getByRole("list", { name: mockTitle })).toBeVisible();
    expect(screen.getByRole("link", { name: mockLinks[0].text })).toBeVisible();
    expect(screen.getByRole("link", { name: mockLinks[1].text })).toBeVisible();
    expect(screen.getByRole("link", { name: mockLinks[2].text })).toBeVisible();
  });
});
