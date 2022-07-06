/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
#import <React/RCTViewManager.h>

@interface RNCMaskedViewManager : RCTViewManager
@end

#ifdef RCT_NEW_ARCH_ENABLED
#import "RNCMaskedView.h"
@implementation RNCMaskedViewManager

RCT_EXPORT_MODULE(RNCMaskedView)

- (UIView *)view
{
return [[UIView alloc] init];
}

@end
#else
#import <UIKit/UIKit.h>
#import <React/RCTView.h>

@interface RNCMaskedView : RCTView

@end

@implementation RNCMaskedViewManager

RCT_EXPORT_MODULE(RNCMaskedView)

- (UIView *)view
{
  return [RNCMaskedView new];
}

@end
#endif
