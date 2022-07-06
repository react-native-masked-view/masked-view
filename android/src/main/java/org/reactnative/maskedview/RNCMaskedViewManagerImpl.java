package org.reactnative.maskedview;

import androidx.annotation.Nullable;
import com.facebook.react.uimanager.ThemedReactContext;

public class RNCMaskedViewManagerImpl {

  public static final String NAME = "RNCMaskedView";

  public static RNCMaskedView createViewInstance(ThemedReactContext context) {
      return new RNCMaskedView(context);
  }

  public static void setAndroidRenderingMode(RNCMaskedView view, @Nullable String renderingMode) {
    if (renderingMode != null) {
      view.setRenderingMode(renderingMode);
    }
  }
}
