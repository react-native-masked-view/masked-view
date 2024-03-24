package org.reactnative.maskedview;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewManagerDelegate;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.viewmanagers.RNCMaskedViewManagerInterface;
import com.facebook.react.views.view.ReactViewGroup;
import com.facebook.react.views.view.ReactViewManager;

public class RNCMaskedViewManager extends ReactViewManager implements RNCMaskedViewManagerInterface<RNCMaskedView> {
  private static final String REACT_CLASS = "RNCMaskedView";

  @NonNull
  @Override
  public String getName() {
    return REACT_CLASS;
  }

  @Override
  public ViewManagerDelegate<ReactViewGroup> getDelegate() {
    // ReactViewManager is not generic, so it doesn't let to pass any view, that extends ReactViewGroup
    // However, ReactViewManager does not use any delegate, so we can skip it and handle props here
    return null;
  }

  @NonNull
  @Override
  public RNCMaskedView createViewInstance(ThemedReactContext themedReactContext) {
    return new RNCMaskedView(themedReactContext);
  }

  @Override
  @ReactProp(name = "androidRenderingMode")
  public void setAndroidRenderingMode(RNCMaskedView view, @Nullable String renderingMode) {
    if (renderingMode != null) {
      view.setRenderingMode(renderingMode);
    }
  }
}
