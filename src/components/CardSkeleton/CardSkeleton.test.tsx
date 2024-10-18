import { render } from "@testing-library/react";
import CardSkeleton from "./CardSkeleton";

describe('CardSkeleton tests', () => {
    test('snapshot test', () => {
        const { container } = render(<CardSkeleton />);
        expect(container).toMatchSnapshot();
    });
});
