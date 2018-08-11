export function createWrapperProxy({ fixtureKey = "wrapper" }) {
  function WrapperProxy({ nextProxy, ...nextProps }) {
    const fixturePropsFn = nextProps.fixture[fixtureKey];
    fixturePropsFn();
    const nextProxyEl = <NextProxy {...nextProps} nextProxy={next()} />;
    return nextProxyEl;
  }
}
