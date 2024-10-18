import { render } from "@testing-library/react";
import Header from "./Header";

describe('Header tests', () => {
    test('snapshot test', () => {
        const { container } = render(<Header />);
        expect(container).toMatchSnapshot();
    });
});
