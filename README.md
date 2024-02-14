# react-ymaps3
React Yandex Maps Javascript API wrapper
https://yandex.ru/dev/jsapi30/doc/en/dg/concepts/general#react

### Installation
```sh
yarn add react-ymaps3
```
### Usage with typescript
```sh
yarn add -D @yandex/ymaps3-types@latest
```
### Requirements
To work you need to get [Yandex Maps Javascript API Key](https://developer.tech.yandex.com/services/3) with hosts configured.

### Minimal working example
```tsx
export const MyComponent = () => {
  return (
    <div style={{height: 600}}>
      <YMapProvider apiKey="{YMAPS3_API_KEY}">
        <YMap location={{center: [37.95, 55.65], zoom: 10}} mode="vector" theme="dark">
          <YMapDefaultSchemeLayer />
          <YMapDefaultFeaturesLayer />
        </YMap>
      </YMapProvider>
    </div>
  )
}
```

### Features
- [x] Basic Components
- [ ] Documentation
      
#### Packages
- [ ] CartesianProjection
- [x] Clusterer
- [x] Controls
- [ ] Hint
- [x] Markers
- [ ] SphericalMercatorProjection
 
