export class PropertiesValueConverter {
  toView(obj) {

    const getStats = (object) => {

      let value;
      let name;
      const type = typeof object;

      if (type === 'object') {

        const objectKeys = Object.keys(object);

        value = objectKeys.map((objectKey) => {

          name = objectKey;

          return getStats(object[objectKey]);
        });

      } else {
        value = object;
      }

      return {
        name: name,
        type: type,
        value: value
      };
    };

    return JSON.stringify(getStats(obj), null, 2);
  }
}
