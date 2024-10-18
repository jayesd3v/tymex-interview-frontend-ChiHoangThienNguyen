import { render } from "@testing-library/react";
import Banner from "./Banner";

describe('Banner tests', () => {
    test('snapshot test', () => {
        const { container } = render(<Banner />);
        expect(container).toMatchSnapshot();
    });
});