import { render } from "@testing-library/react";
import BottomLines from "./BottomLlines";


describe('BottomLines tests', () => {
    test('snapshot test', () => {
        const { container } = render(<BottomLines />);
        expect(container).toMatchSnapshot();
    });
});