
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import MapContainer from "./MapContainer";

describe("MapContainer", () =>
{
    // beforeEach(() => { });

    // beforeEach(() => { });

    test("MapContainer renders", () =>
    {
        // jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
        //     Map: () => ({})
        //  }));

        render(
            <MapContainer />
        );
    });
});
