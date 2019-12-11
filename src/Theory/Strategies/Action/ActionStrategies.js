export class ActionStrategies {
    static nop() {
        return () => null;
    }

    static log(note, viewerData) {
        let output = {
            note: note,
            viewerData: viewerData
        }
        return () => {
            console.log(output);
        }
    }
}
