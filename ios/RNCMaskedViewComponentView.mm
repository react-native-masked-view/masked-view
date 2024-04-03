#if RCT_NEW_ARCH_ENABLED
#import "RNCMaskedViewComponentView.h"

#import <React/RCTConversions.h>
#import <RCTTypeSafety/RCTConvertHelpers.h>

#import <react/renderer/components/RNMaskedViewSpec/ComponentDescriptors.h>
#import <react/renderer/components/RNMaskedViewSpec/EventEmitters.h>
#import <react/renderer/components/RNMaskedViewSpec/Props.h>
#import <react/renderer/components/RNMaskedViewSpec/RCTComponentViewHelpers.h>

#import "RCTFabricComponentsPlugins.h"

using namespace facebook::react;

@interface RNCMaskedViewComponentView () <RCTRNCMaskedViewViewProtocol>
@end

@implementation RNCMaskedViewComponentView

- (instancetype)initWithFrame:(CGRect)frame
{
    if (self = [super initWithFrame:frame]) {
        static const auto defaultProps = std::make_shared<const RNCMaskedViewProps>();
        _props = defaultProps;
    }
    return self;
}

- (void)mountChildComponentView:(UIView<RCTComponentViewProtocol> *)childComponentView index:(NSInteger)index
{
    if (index == 0) {
        self.maskView = childComponentView;
        return;
    }
    [self addSubview:childComponentView];
}

- (void)unmountChildComponentView:(UIView<RCTComponentViewProtocol> *)childComponentView index:(NSInteger)index
{
    if (index == 0) {
        self.maskView = nil;
        return;
    }
    [childComponentView removeFromSuperview];
}

- (void)invalidateLayer
{
  // RCTViewComponentView uses invalidateLayer to do border rendering.
  // We don't need to do that in RNCMaskedViewComponentView, so we
  // stub this method and override the default implementation.
}

+ (ComponentDescriptorProvider)componentDescriptorProvider
{
    return concreteComponentDescriptorProvider<RNCMaskedViewComponentDescriptor>();
}

@end

Class<RCTComponentViewProtocol> RNCMaskedViewCls(void)
{
    return RNCMaskedViewComponentView.class;
}
#endif
