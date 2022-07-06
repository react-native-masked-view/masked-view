#import <UIKit/UIKit.h>

// This guard prevent this file to be compiled in the old architecture.
#ifdef RCT_NEW_ARCH_ENABLED
#import <React/RCTViewComponentView.h>


#ifndef NativeComponentExampleCompontView_h
#define NativeComponentExampleComponentView_h

NS_ASSUME_NONNULL_BEGIN

@interface RNCMaskedView : RCTViewComponentView
@end

NS_ASSUME_NONNULL_END

#endif /* NativeComponentExampleComponentView_h */
#endif /* RCT_NEW_ARCH_ENABLED */
