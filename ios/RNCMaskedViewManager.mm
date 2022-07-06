/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import <React/RCTViewManager.h>


@interface RNCMaskedViewManager : RCTViewManager
@end

@implementation RNCMaskedViewManager

RCT_EXPORT_MODULE(RNCMaskedView)

- (UIView *)view
{
return [[UIView alloc] init];
}

@end
