import { render } from "@testing-library/react";
import Footer from "./Footer";

describe('Footer tests', () => {
    test('snapshot test', () => {
        const { container } = render(<Footer />);
        expect(container).toMatchSnapshot();
    });
});
